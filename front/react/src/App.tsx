import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Suggestions } from './services/suggestions.interface';
import { Subscription } from 'rxjs';
import Form from './components/form';
import { Top, TopItem } from './services/top.interface';
import TopList from './components/top';

interface AppProps {
  suggestionsService: Suggestions;
  topService: Top;
}

interface AppState {
  value: string;
  top: TopItem[];
  suggestions: string[]; // list of suggestions
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = { value: '', suggestions: [], top: [] };

  // subscribtions to unsubscribe all in one line and avoid memory leaks and make tests happy
  subs: Subscription[] = [];

  readonly redirectUrl = 'https://www.bing.com/search';

  async componentDidMount() {

    this.subs.push(
      this.props.suggestionsService.data$.subscribe(suggestions => this.setState({ suggestions })),
      this.props.topService.data$.subscribe(top => this.setState({ top })),
    );
  }
  async componentWillUnmount() {
    this.subs.forEach(s => s.unsubscribe());
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
    const { top, value, suggestions } = this.state;
    return (
      <>
        <div className="App" >
          <Form value={value} suggestions={suggestions} onSubmit={this.handleSubmit} onChange={this.handleChange}></Form>
        </div>
        <TopList items={top}></TopList>
      </>
    );
  }
}


export default App;
