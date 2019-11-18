import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Suggestions } from './services/suggestions.interface';
import { Subscription } from 'rxjs';

interface AppProps {
  suggestionsService: Suggestions;
}

interface AppState {
  value: string;
  listSuggestions: string[]; // list of suggestions
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = { value: 'mock ', listSuggestions: [] };

  sub$?: Subscription;

  renderSuggestions() {
    return this.state.listSuggestions.map((v, i) => <div key={i}>{v}</div>);
  }

  async componentDidMount() {
    this.sub$ = this.props.suggestionsService.data$.subscribe(listSuggestions => this.setState({ listSuggestions }));
    this.props.suggestionsService.next('foo');
  }
  async componentWillUnmount() {
    if (this.sub$) this.sub$.unsubscribe();
  }

  render() {
    return (
      <div className="App" >
        {this.renderSuggestions()}
      </div>
    );
  }
}


export default App;
