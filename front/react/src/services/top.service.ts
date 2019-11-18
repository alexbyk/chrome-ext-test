import { TopItem, Top } from "./top.interface";
import { ReplaySubject } from "rxjs";

export class TopService implements Top {
  data$ = new ReplaySubject<TopItem[]>(1);
  constructor() {
    if (chrome && chrome.topSites) {
      chrome.topSites.get(data => {
        this.data$.next(data.map(el => ({ ...el, img: `chrome://favicon/${el.url}` })));
      });
    };
  }

}
