import React from 'react';
import { TopItem } from "../../services/top.interface";


const Item: React.FC<TopItem> = (props) => {
  return (
    <a href={props.url}>
      <img src={props.img} />
      <span>{props.title}</span>
    </a>
  );
}

export default Item;
