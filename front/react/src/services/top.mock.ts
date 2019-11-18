import { Top } from "./top.interface";
import { of } from "rxjs";

export class TopMock implements Top {
  data$ = of([
    { title: 'alexbyk.com', url: 'http://alexbyk.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com sdf sdf asdfsd fsdf sf sa', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
    { title: 'google.com', url: 'http://google.com', img: 'http://google.com/favicon.ico' },
  ]);
}
