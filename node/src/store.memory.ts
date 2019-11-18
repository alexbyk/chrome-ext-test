import { Store } from './store.interface';

/** Implements in memory cache */
export class StoreMemory implements Store {

  private map: {
    [key: string]: string[]
  } = {};

  /** Returns a list by key, or null, if key doesn't exist */
  async get(key: string) {
    if (this.map[key]) return this.map[key];
    return null;
  }

  /** Stores a list by the key */
  async set(key: string, list: string[]) {
    this.map[key] = list;
  }
}
