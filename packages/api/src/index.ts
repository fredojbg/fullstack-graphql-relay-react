import { router } from './router';

import Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'HOLISSSSS';
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);
