import React, { Component } from 'react'
import styles from './styles.css'
import ShowerHeader from './ShowerHeader/index.js'

class ActiveShower extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <div className={styles.showerContainer}>
                <ShowerHeader/>
            </div>
        )
    }
}

export default ActiveShower