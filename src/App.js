import React, { Component } from 'react'
import styles from './App.css'
import SideMenu from './components/SideMenu/index.js'
import ActiveShower from './components/ActiveShower/index.js'
import { ShowerProvider, ShowerConsumer } from './Context.js'

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
          <SideMenu
            accountName='Apt #601'
          />
          <ShowerProvider>
              <ShowerConsumer>
                {(context) => (
                  <ActiveShower
                    tick={context.state.tick}
                  />
                )}
              </ShowerConsumer>
          </ShowerProvider>
        </div>
    );
  }
}

export default App;

/*
                {(context) => (
                  <ActiveShower
                    {...context}
                  />
                )}
              </ShowerConsumer>
*/