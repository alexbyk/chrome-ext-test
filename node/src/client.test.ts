import { Client } from './client';
import { Store } from './store.interface';
import { StoreMemory } from './store.memory';

let client: Client;
let store: Store;
let spy: jest.SpyInstance;
beforeEach(() => {
  store = new StoreMemory();
  client = new Client(store)
  spy = jest.spyOn(client, 'fetch').mockResolvedValue(['foo', 'bar']);
});

test('Get', async () => {
  await expect(store.get('foo')).resolves.toEqual(null);
  await expect(client.get('foo')).resolves.toEqual(['foo', 'bar']);
  expect(spy).toHaveBeenCalledTimes(1);
  await expect(client.get('foo')).resolves.toEqual(['foo', 'bar']);
  expect(spy).toHaveBeenCalledTimes(1);
  await expect(store.get('foo')).resolves.toEqual(['foo', 'bar']);
});
