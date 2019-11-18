import React from 'react';

export interface InputProps {
  suggestions: string[];
  onChange: (v: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = (props) => {
  const options = props.suggestions.map((v, i) => <option value={v} key={i}></option>);
  return (
    <>
      <input type="text" value={props.value} list="searchList" name="search" onChange={(e) => props.onChange(e.target.value)} />
      <datalist id="searchList">{options}</datalist>
    </>
  );
}

export default Input;
