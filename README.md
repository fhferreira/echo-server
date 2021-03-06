Revamped Echo Server
====================

![CI](https://github.com/renoki-co/echo-server/workflows/CI/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/renoki-co/echo-server/branch/master/graph/badge.svg)](https://codecov.io/gh/renoki-co/echo-server/branch/master)
[![Latest Stable Version](https://img.shields.io/github/v/release/renoki-co/echo-server)](https://www.npmjs.com/package/@renoki-co/echo-server)
[![Total Downloads](https://img.shields.io/npm/dt/@renoki-co/echo-server)](https://www.npmjs.com/package/@renoki-co/echo-server)
[![License](https://img.shields.io/npm/l/@renoki-co/echo-server)](https://www.npmjs.com/package/@renoki-co/echo-server)


Echo Server is a container-ready, multi-scalable Node.js application used to host your own Socket.IO server for Laravel Broadcasting. It is built on top of Socket.IO and has a Pusher-compatible API server beneath, that makes your implementation a breeze.

This is a fork of the original [Laravel Echo Server package](https://github.com/tlaverdure/laravel-echo-server).

## 🤝 Supporting

Renoki Co. on GitHub aims on bringing a lot of open source projects and helpful projects to the world. Developing and maintaining projects everyday is a harsh work and tho, we love it.

If you are using your application in your day-to-day job, on presentation demos, hobby projects or even school projects, spread some kind words about our work or sponsor our work. Kind words will touch our chakras and vibe, while the sponsorships will keep the open source projects alive.

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/R6R42U8CL)

## Current Milestones

- Testing

## System Requirements

The following are required to function properly:

- Laravel 6.x+
- Node 10.0+
- Redis 5+ (optional)

Additional information on broadcasting with Laravel can be found in the official docs: <https://laravel.com/docs/master/broadcasting>

## 🚀 Installation

You can install the package via npm:

```bash
npm install -g @renoki-co/echo-server
```

## 🙌 Usage

You can run Echo Server directly from the CLI:

```bash
$ echo-server start
```

## Environment Variables

Since there is no configuration file, you may declare the parameters using environment variables directly passed in the CLI, either as key-value attributes in an `.env` file at the root of the project:

```bash
$ DATABASE_DRIVER=redis echo-server start
```

When using .env, you shall prefix them with `ECHO_SERVER_`:

```bash
# Within your .env file
ECHO_SERVER_DATABASE_DRIVER=redis
```

### Available Environment Variables

| Environment variable | Object dot-path | Default | Available values | Description |
| - | - | - | - | - |
| `APP_DEFAULT_ALLOWED_ORIGINS` | `appManager.array.apps.0.allowedOrigins` | `["*"]` | - | The default app allowed origins for the array driver. Overrides the `APPS_LIST` if set. |
| `APP_DEFAULT_AUTH_ENDPOINT` | `appManager.array.apps.0.authEndpoint` | `/broadcasting/auth` | - | The default endpoint to call with the host when authenticating users. Overrides the `APPS_LIST` if set. |
| `APP_DEFAULT_AUTH_HOSTS` | `appManager.array.apps.0.authHosts` | `["http://127.0.0.1"]` | - | The default host to call when authenticating users. Overrides the `APPS_LIST` if set. |
| `APP_DEFAULT_ID` | `appManager.array.apps.0.id` | `echo-app` | - | The default app id for the array driver. Overrides the `APPS_LIST` if set. |
| `APP_DEFAULT_KEY` | `appManager.array.apps.0.key` | `echo-app-key` | - | The default app key for the array driver. Overrides the `APPS_LIST` if set. |
| `APP_DEFAULT_MAX_CONNS` | `apiManager.array.apps.0.maxConnections` | `NaN` | - | The default app's limit of concurrent connections. Overrides the `APPS_LIST` if set. |
| `APP_DEFAULT_SECRET` | `appManager.array.apps.0.secret` | `echo-app-secret` | - | The default app secret for the array driver. Overrides the `APPS_LIST` if set. |
| `APPS_LIST` | `appManager.array.apps` | `'[{"id":"echo-app","key":"echo-app-key","secret":"echo-app-secret","maxConnections":"-1","authHosts":"[\"http://127.0.0.1\"]","authEndpoint":"/broadcasting/auth"}]'` | - | The list of apps to be used for authentication. |
| `APPS_MANAGER_DRIVER` | `appManager.driver` | `array` | `array`, `api` | The driver used to retrieve the app. Use `api` or other centralized method for storing the data. |
| `APPS_MANAGER_ENDPOINT` | `appManager.api.endpoint` | `/echo-server/app` | - | The endpoint used to retrieve an app. This is for `api` driver. |
| `APPS_MANAGER_HOST` | `appManager.api.host` | `http://127.0.0.1` | - | The host used to make call, alongside with the endpoint, to retrieve apps. It will be passed in the request as `?token=` |
| `APPS_MANAGER_TOKEN` | `appManager.api.token` | `echo-app-token` | - | The token used for any API app manager provider to know the request came from the Node.js server. |
| `CORS_ALLOWED_ORIGINS` | `cors.origin` | `["*"]` | - | The array of allowed origins that can connect to the WS. |
| `DATABASE_DRIVER` | `database.driver` | `redis` | `redis`, `local` | The database driver for storing socket data. Use `redis` or other centralized method for storing data. |
| `DEBUG` | `development` | `false` | `true`, `false` | Weteher the app should be in development mode. |
| `REDIS_HOST` | `database.redis.host` | `127.0.0.1` | - | The Redis host used for `redis` driver. |
| `REDIS_PORT` | `database.redis.port` | `6379` | - | The Redis port used for `redis` driver. |
| `REDIS_PASSWORD` | `database.redis.password` | `null` | - | The Redis password used for `redis` driver. |
| `REDIS_PREFIX` | `database.redis.keyPrefix` | `echo-server` | - | The key prefix for Redis. Only for `redis` driver. |
| `SOCKET_HOST` | `host` | `null` | - |The host used for Socket.IO |
| `SOCKET_PORT` | `port` | `6001` | - | The port used for Socket.IO |
| `SOCKET_PROTOCOL` | `protocol` | `http` | `http`, `https` | The protocol used for the Socket.IO. |
| `SSL_CERT` | `ssl.certPath` | `''` | - | The path for SSL certificate file. |
| `SSL_KEY` | `ssl.keyPath` | `''` | - | The path for SSL key file. |
| `SSL_CA` | `ssl.caPath` | `''` | - | The path for CA certificate file. |
| `SSL_PASS` | `ssl.passphrase` | `''` | - | The passphrase for the SSL key file. |

## Pusher Compatibility

This server has 100% compatibility with the Pusher clients, meaning that you can use the `pusher` broadcasting driver pointing to the server and expect for it to full work.

However, you still need to declare the apps that can be used either by static listing, or by setting an exposed app driver. You will need to add a new connection to the broadcasting list:

```php
'socketio' => [
    'driver' => 'pusher',
    'key' => env('SOCKETIO_APP_KEY'),
    'secret' => env('SOCKETIO_APP_SECRET'),
    'app_id' => env('SOCKETIO_APP_ID'),
    'options' => [
        'cluster' => env('SOCKETIO_APP_CLUSTER'),
        'encrypted' => true,
        'host' => env('SOCKETIO_HOST', '127.0.0.1'),
        'port' => env('SOCKETIO_PORT', 6001),
        'scheme' => 'http',
        'curl_options' => [
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_SSL_VERIFYPEER => 0,
        ],
    ],
],
```

```env
BROADCAST_DRIVER=socketio

SOCKETIO_HOST=127.0.0.1
SOCKETIO_PORT=6001
SOCKETIO_APP_ID=echo-app
SOCKETIO_APP_KEY=echo-app-key
SOCKETIO_APP_SECRET=echo-app-secret

# These are the default values to connect to. It's recommended to specify the server an `APPS_LIST`
# or override these values using `APP_DEFAULT_*` keys.
ECHO_SERVER_APP_DEFAULT_ID=echo-app
ECHO_SERVER_DEFAULT_KEY=echo-app-key
ECHO_SERVER_DEFAULT_SECRET=echo-app-secret
```

Last, but not least, the Socket.IO client can be easily namespaced by using the `SOCKETIO_APP_KEY` value, so that it can listen to the `echo-app` namespace. If the namespace is not provided, you will likely see it not working because the defined clients list has only one app, with the ID `echo-app`, so this is the namespace it will broadcast to.

```js
window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001/echo-app-key', // "echo-app-key" should be replaced with the App Key
    transports: ['websocket'],
});
```

## Apps Manager Drivers

By default, the apps can be defined by passing an array, as explained earlier, using `APPS_LIST` variable.

However, you might want to store multiple apps in a dynamic & controlled manner. The `api` driver comes in place to help with that. You can specify the host, endpoint and a verification token that can make requests on Echo Server's behalf and retrieve the apps.

In Laravel, you can use [renoki-co/echo-server-core](https://github.com/renoki-co/echo-server-core), and extend the functionality for the `api` driver by storing the apps into database. It comes out-of-the-box with migrations and models, so you can immediately extend the core functionality for Echo Server.

## Local Drivers

By default, Redis is used to store presence channels' data and communicate between other nodes/processes when runing at scale. However, if you have a single monolithic application or a single-node, single-process Node.js process app, you can simply just call the driver as `local`:

```bash
$ DATABASE_DRIVER=local echo-server start
```

## SSL Support

Coming soon.

## Deploying with PM2

The package supports pm2 out-of-the-box, so you can easily use it to scale processes:

```bash
$ pm2 start bin/pm2.js --name=echo-server -i max
```

You can also easily scale the processes in and out:

```bash
$ pm2 scale echo-server 5
```

```
┌─────┬────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name           │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ echo-server    │ default     │ 1.1.0   │ cluster │ 10132    │ 3m     │ 0    │ online    │ 0%       │ 49.4mb   │ vagrant  │ disabled │
│ 1   │ echo-server    │ default     │ 1.1.0   │ cluster │ 10139    │ 3m     │ 0    │ online    │ 0%       │ 50.0mb   │ vagrant  │ disabled │
│ 2   │ echo-server    │ default     │ 1.1.0   │ cluster │ 10248    │ 2m     │ 0    │ online    │ 0%       │ 49.4mb   │ vagrant  │ disabled │
│ 3   │ echo-server    │ default     │ 1.1.0   │ cluster │ 10828    │ 28s    │ 0    │ online    │ 0%       │ 48.4mb   │ vagrant  │ disabled │
│ 4   │ echo-server    │ default     │ 1.1.0   │ cluster │ 10835    │ 28s    │ 0    │ online    │ 0%       │ 48.1mb   │ vagrant  │ disabled │
└─────┴────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
```

**Remember, if you are scaling processes or nodes, make sure to NOT use the local driver since it won't talk effectively between processes/nodes, and you should use a replicating driver like Redis (which is set by default).**

## Docker Images

The package was built and oriented to a scalable approach, meaning it supports multi-node & multi-process configurations, but also Docker for rapid scaling on certain infrastructure, like Kubernetes.

Container versioning is done the same way like the package versioning. You can find some of the tags in [the official Docker repository](https://hub.docker.com/r/renokico/echo-server).

You can pull various versions:

```bash
$ docker pull renokico/echo-server:latest
```

```bash
$ docker pull renokico/echo-server:1.0.0
```

To run in Docker, you can simply:

```bash
$ docker run -p 6001:6001 renokico/echo-server:1.0.0
```

## 🤝 Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## 🔒  Security

If you discover any security related issues, please email alex@renoki.org instead of using the issue tracker.

## 🎉 Credits

- [Thiery Laverdure](https://github.com/tlaverdure)
- [Alex Renoki](https://github.com/rennokki)
- [All Contributors](../../contributors)
