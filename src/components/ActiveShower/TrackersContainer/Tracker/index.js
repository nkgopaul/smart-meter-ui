import React, { Component } from 'react'
import styles from './styles.css'

class Tracker extends Component {
    render() {
        return (
            <div className={styles.tracker} style={{ backgroundColor: this.props.backgroundColor }}>
                <div>
                    <span>{this.props.title}</span>
                </div>
                <ul className={styles.valuesContainer}>
                    <li className={styles.currContainer}>
                        <div className={styles.val}>{this.props.currVal}</div>
                        <div>{this.props.currLabel}</div>
                    </li>
                    <li className={styles.estContainer}>
                        <div className={styles.val}>{this.props.estVal}</div>
                        <div>{this.props.estLabel}</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Tracker