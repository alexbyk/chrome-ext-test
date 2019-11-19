import { Suggestions } from "./suggestions.interface";
import { Subject, Observable, of, throwError, empty } from 'rxjs';
import { switchMap, catchError, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

/** Service that fetches a data and emits results */
export class SuggestionsService implements Suggestions {
  private url = 'http://localhost:8080/';

  private input$ = new Subject<string>();

  fetch(key: string): Observable<{ list: [string] }> {
    return of(key).pipe(
      map(key => {
        const url = new URL(this.url);
        url.searchParams.append('q', key);
        return url.toString();
      }),
      switchMap(url => fromFetch(url)),
      switchMap(resp => resp.ok ? resp.json() : throwError(`Error: ${resp.status}`)),
      catchError(e => { // catch error to continue if the server is up
        console.error(`Fetch error: ${e}`);
        return empty();
      }),
    );
  }

  data$: Observable<string[]> = this.input$.pipe(
    debounceTime(300), // timeout 300ms
    distinctUntilChanged(), // don't repeat
    switchMap(key => this.fetch(key)),
    map((data: { list: string[] }) => data['list']),
    catchError(e => {
      console.error(`Error: ${e}`);
      return empty();
    }),
  );

  next(key: string) {
    this.input$.next(key.trim());
  }
}
