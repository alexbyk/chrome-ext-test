import { SuggestionsService } from "./suggestions.service";
import { of } from "rxjs";

let suggestions: SuggestionsService;
beforeEach(() => {
  suggestions = new SuggestionsService();
  spyOn(suggestions, 'fetch').and.returnValue(of({ list: ['foo', 'bar'] }));
});

test('Should return a list', (done) => {
  const ob = suggestions.data$;
  const sub = ob.subscribe(list => {
    expect(list).toEqual(['foo', 'bar'])
    sub.unsubscribe();
    done();
  });
  suggestions.next('mock');
});
