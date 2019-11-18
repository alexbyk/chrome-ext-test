import Koa from 'koa';

const app = new Koa();
const port = process.env.port || '3000';

app.use(async ctx => {
  const q = ctx.query['q'] || '';
  const list = [q];
  ctx.body = { list }; // eslint-disable-line
});


app.listen(port, () => console.log(`Listening on ${port}`));
