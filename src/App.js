import React, { Component } from 'react';
import ShibesForm from './components/AnimalsForm';
import ShibesGallery from './components/ShibesGallery';
import ShibesService from './ShibesService';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSending: false,
      images: []
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(shibesType, shibesCount) {
    this.setState({ isSending: true });
    ShibesService.getShibes(shibesType, shibesCount)
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ isSending: false }));
  }
  render() {
    return (
      <div className="App">
        <ShibesForm onSubmit={this.onSubmit} isSending={this.state.isSending} />
        <ShibesGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
