import React from 'react';
import Input, { InputProps } from './Input';


export interface FormProps extends InputProps {
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <form onSubmit={e => { e.preventDefault(); props.onSubmit(); }}>
      <Input suggestions={props.suggestions} onChange={v => { props.onChange(v) }} value={props.value}></Input>
      <button disabled={!props.value}>Submit</button>
    </form>
  );
}

export default Form;
