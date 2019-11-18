import { Suggestions } from "./suggestions.interface";
import { Subject } from 'rxjs';

/** Mock suggestions */
export class SuggestionsMock implements Suggestions {
  data$ = new Subject<string[]>();
  next(_: string) {
    this.data$.next(['foo', 'bar']);
  }
}
