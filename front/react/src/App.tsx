import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Suggestions } from './services/suggestions.interface';
import { Subscription } from 'rxjs';
import Form from './components/form';

interface AppProps {
  suggestionsService: Suggestions;
}

interface AppState {
  value: string;
  suggestions: string[]; // list of suggestions
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = { value: '', suggestions: [] };

  sub$?: Subscription;

  readonly redirectUrl = 'https://www.bing.com/search';

  renderSuggestions() {
    return this.state.suggestions.map((v, i) => <div key={i}>{v}</div>);
  }

  async componentDidMount() {
    this.sub$ = this.props.suggestionsService.data$.subscribe(listSuggestions => this.setState({ suggestions: listSuggestions }));
  }
  async componentWillUnmount() {
    if (this.sub$) this.sub$.unsubscribe();
  }

  handleSubmit = () => {
    this.setState({ value: '' });
    const url = new URL(this.redirectUrl);
    url.searchParams.append('q', this.state.value);
    document.location.href = `${url}`;
  }

  handleChange = (value: string) => {
    this.setState({ value });
    this.props.suggestionsService.next(value);
  }

  render() {
    return (
      <div className="App" >
        <Form {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange}></Form>
      </div>
    );
  }
}


export default App;
