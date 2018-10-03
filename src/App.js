import React, { Component } from 'react';
import ShibesForm from './components/AnimalsForm';
import ShibesService from './ShibesService';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSending: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(shibesType, shibesCount) {
    this.setState({ isSending: true });
    ShibesService.getShibes(shibesType, shibesCount)
      .then(data => console.log(data))
      .finally(() => this.setState({ isSending: false }));
  }
  render() {
    return (
      <div className="App">
        <ShibesForm onSubmit={this.onSubmit} isSending={this.state.isSending} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
