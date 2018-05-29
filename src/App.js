import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu/index.js'
import ActiveShower from './components/ActiveShower/index.js'

class App extends Component {
  render() {
    return (
      <div>
        <SideMenu
          accountName="Apt #601"
        />
        <ActiveShower
        />
      </div>
    );
  }
}

export default App;
