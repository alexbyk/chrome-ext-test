import { Top } from "./top.interface";
import { of } from "rxjs";

export class TopMock implements Top {
  data$ = of([{ title: 'alexbyk.com', url: 'http://alexbyk.com', img: 'http://google.com/favicon.ico' }]);
}
