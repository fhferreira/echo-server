import { App } from './../app';
import { AppManagerDriver } from './app-manager-driver';
import { Log } from './../log';
import { SocketRequester } from '../socket-requester';

export class ApiAppManager implements AppManagerDriver {
    /**
     * The request client to authenticate on.
     *
     * @type {SocketRequester}
     */
    protected _socketRequester;

    /**
     * Create a new app manager instance.
     *
     * @param {any} options
     */
    constructor(protected options) {
        this._socketRequester = new SocketRequester(options);
    }

    /**
     * Find an app by given ID.
     *
     * @param  {string}  id
     * @param  {any}  socket
     * @param  {any}  data
     * @return {Promise<App|null>}
     */
    find(id: string, socket: any, data: any): Promise<App|null> {
        let options = {
            url: `${this.options.appManager.api.host}${this.options.appManager.api.endpoint}`.replace(':appId', id) + `token=${this.options.appManager.api.token}`,
            headers: (data.auth && data.auth.headers) ? data.auth.headers : {},
            rejectUnauthorized: false,
        };

        if (this.options.development) {
            Log.info({
                time: new Date().toISOString(),
                options,
                action: 'find_app',
                status: 'preparing',
            });
        }

        return new Promise((resolve, reject) => {
            this._socketRequester.serverRequest(socket, options).then(body => {
                console.log({ body });
            }, error => {
                if (this.options.development) {
                    Log.error(error.reason);
                }

                reject(error);
            });
        });
    }
}
