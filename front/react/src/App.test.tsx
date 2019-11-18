import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SuggestionsMock } from './services/suggestions.mock';

let suggestions: SuggestionsMock;

beforeEach(() => {
  suggestions = new SuggestionsMock();
});

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App suggestions={suggestions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Unsubsribes correctly', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App suggestions={suggestions} />, div);
  suggestions.next('foo');
  ReactDOM.unmountComponentAtNode(div);
});
