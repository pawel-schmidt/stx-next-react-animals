import React, { Component } from 'react';
import AnimalsForm from './components/AnimalsForm';
import AnimalsGallery from './components/AnimalsGallery';
import AnimalsService from './AnimalsService';
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
  onSubmit(animalsType, animalsCount) {
    this.setState({ isSending: true });
    AnimalsService.getAnimals(animalsType, animalsCount)
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ isSending: false }));
  }
  render() {
    return (
      <div className="App">
        <AnimalsForm onSubmit={this.onSubmit} isSending={this.state.isSending} />
        <AnimalsGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
