/** Store describes a cache service */
export interface Store {
  get(key: string): Promise<string[] | null>;
  set(key: string, list: string[]): Promise<void>;
}
