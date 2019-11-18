import { URL } from 'url';
import fetch from 'node-fetch';
import { Store } from './store.interface';

/** Client makes http requests to remote url */
export class Client {

  constructor(private store: Store) { }

  private url = 'https://api.bing.com/osjson.aspx';

  /** Returns a list of suggestions, trying to find in cache. Invokes a `fetch` method if a key doesn't exist */
  async get(key: string): Promise<string[]> {
    const cached = await this.store.get(key);
    if (cached) return cached;

    const list = await this.fetch(key);
    this.store.set(key, list); // set later, no await
    return list;
  }

  /** fetch a list from remote url */
  async fetch(key: string): Promise<string[]> {
    const url = new URL(this.url);
    url.searchParams.append('query', key);
    const res = await fetch(url)
    const json = await res.json();
    return json[1];
  }


}
