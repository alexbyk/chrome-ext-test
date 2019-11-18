import { Observable } from 'rxjs';

export interface Suggestions {
  next(key: string): void;
  data$: Observable<string[]>
}
