import React, { Component } from 'react';
import styles from './App.css';
import SideMenu from './components/SideMenu/index.js'
import ActiveShower from './components/ActiveShower/index.js'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
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
