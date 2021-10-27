FROM node:10-alpine
WORKDIR /app
COPY . ./

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

ARG PORT
ENV PORT=$PORT

RUN apk add --no-cache --virtual .gyp \
        bash \
        g++ \
    && npm i -s \
    && apk del .gyp

EXPOSE $PORT

CMD ["npm", "run", "dev"]
