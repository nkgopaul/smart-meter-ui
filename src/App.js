import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button.js'

class App extends Component {
  render() {
    return (
      <Button
        onPress={function() {console.log('i want to die')}}
        title='Button'
        backgroundColor="#90C0FF"
      />
    );
  }
}

export default App;
