import Koa from 'koa';
import { StoreMemory } from './store.memory';
import { Client } from './client';
import cors from '@koa/cors';

const app = new Koa();
const port = process.env.port || '8080';

const store = new StoreMemory(); // our cache
const client = new Client(store); // our client

app.use(cors());
app.use(async ctx => {
  const q = ctx.query['q'] || '';
  const list = await client.get(q);
  ctx.body = { list }; // eslint-disable-line
});


app.listen(port, () => console.log(`Listening on ${port}`));
