import React, { Component } from 'react';
import ShibesForm from './components/AnimalsForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onSubmit(count) {
    console.log(`App#onSubmit(${count})`);
  }
  render() {
    return (
      <div className="App">
        <ShibesForm onSubmit={this.onSubmit} isSending={false} />
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
