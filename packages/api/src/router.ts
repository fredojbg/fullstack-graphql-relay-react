import { execute } from 'graphql-api-koa';
import { schema } from './graphql';

import Router = require('@koa/router');

const router = new Router();

router.get('/hello', (ctx) => {
  ctx.body = 'You are watching this new server';
});

router.post(
  '/graphql',
  execute({
    schema,
  }),
);

export { router };
