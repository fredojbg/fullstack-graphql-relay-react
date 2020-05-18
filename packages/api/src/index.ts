import { router } from './router';
import Bodyparser = require('koa-bodyparser');

import Koa = require('koa');
const app = new Koa();

app.use(Bodyparser());

app.use((ctx, next) => {
  ctx.body = 'HOLISSSSS';
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);
