import { Observable } from "rxjs";

export interface TopItemResp {
  url: string;
  title: string;
}

export interface TopItem extends TopItemResp {
  img: string;
}

export interface Top {
  data$: Observable<TopItem[]>;
}
