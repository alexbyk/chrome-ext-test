import React from 'react';
import { TopItem } from '../../services/top.interface';
import Item from './Item';

interface TopListProps {
  items: TopItem[];
}

const TopList: React.FC<TopListProps> = (props) => {
  const list = props.items.map((v, i) => <Item key={i} {...v}></Item>);
  return (
    <ul>
      {list}
    </ul>
  );
}

export default TopList;
