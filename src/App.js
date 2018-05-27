import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu/index.js'

class App extends Component {
  render() {
    return (
      <SideMenu
        accountName="Apt #601"
      />
    );
  }
}

export default App;
