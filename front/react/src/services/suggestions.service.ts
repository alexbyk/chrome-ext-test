import { Suggestions } from "./suggestions.interface";
import { Subject, Observable, of, throwError } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

/** Service that fetches a data and emits results */
export class SuggestionsService implements Suggestions {
  private url = 'http://localhost:3000/';

  private input$ = new Subject<string>();

  fetch(key: string): Observable<{ list: [string] }> {
    const url = new URL(this.url);
    url.searchParams.append('q', key);
    return fromFetch(`${url}`).pipe(
      switchMap(resp => {
        if (resp.ok) return resp.json();
        return throwError(`Error: ${resp.status}`);
      }),
    );
  }

  data$: Observable<string[]> = this.input$.pipe(
    switchMap(key => this.fetch(key)),
    map((data: { list: string[] }) => data['list']),
    catchError(err => {
      console.error(err);
      return of([])
    })
  );

  next(key: string) {
    this.input$.next(key.trim());
  }
}
