import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SuggestionsMock } from './services/suggestions.mock';
import { TopMock } from './services/top.mock';

let suggestionsMock: SuggestionsMock;
let topMock: TopMock;

beforeEach(() => {
  suggestionsMock = new SuggestionsMock();
  topMock = new TopMock();
});

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App topService={topMock} suggestionsService={suggestionsMock} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Unsubsribes correctly', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App topService={topMock} suggestionsService={suggestionsMock} />, div);
  suggestionsMock.next('foo');
  ReactDOM.unmountComponentAtNode(div);
});
