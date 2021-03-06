FROM node:lts-alpine3.10

LABEL maintainer="Renoki Co. <alex@renoki.org>"

COPY . /app

RUN cd /app && \
    npm install && \
    npm run lint && \
    npm run build && \
    rm -rf src/ tests/

EXPOSE 6001

WORKDIR /app

ENTRYPOINT ["node", "/app/bin/server.js", "start"]
