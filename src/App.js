import React, { Component } from 'react';
import  ConditionalSection from './sections/conditional';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConditionalSection></ConditionalSection>
      </div>
    );
  }
}

export default App;
