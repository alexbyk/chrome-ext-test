import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SuggestionsService } from './services/suggestions.service';
import { TopService } from './services/top.service';

const suggestionsService = new SuggestionsService();
const topService = new TopService();

ReactDOM.render(<App topService={topService} suggestionsService={suggestionsService} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
