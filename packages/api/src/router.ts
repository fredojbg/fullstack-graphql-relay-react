import Router = require('@koa/router');

const router = new Router();

router.get('/graphql', (ctx) => {
  ctx.body = 'You are watching this new server';
});

export { router };
