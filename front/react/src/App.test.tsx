import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SuggestionsMock } from './services/suggestions.mock';

let suggestionsMock: SuggestionsMock;

beforeEach(() => {
  suggestionsMock = new SuggestionsMock();
});

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App suggestionsService={suggestionsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Unsubsribes correctly', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App suggestionsService={suggestionsMock} />, div);
  suggestionsMock.next('foo');
  ReactDOM.unmountComponentAtNode(div);
});
