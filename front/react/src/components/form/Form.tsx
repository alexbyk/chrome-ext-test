import React from 'react';
import Input, { InputProps } from './Input';


export interface FormProps extends InputProps {
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <form onSubmit={e => { e.preventDefault(); props.onSubmit(); }}>
      <div>
        <Input suggestions={props.suggestions} onChange={v => { props.onChange(v) }} value={props.value}></Input>
        <button disabled={!props.value}>Submit</button>
      </div>
    </form>
  );
}

export default Form;
