import React, { Component } from 'react'
import styles from './styles.css'
import ShowerHeader from './ShowerHeader/index.js'
import TrackersContainer from './TrackersContainer/index.js'
import Graph from './Graph/index.js'

class ActiveShower extends Component {
    componentDidMount() {
        setInterval(this.props.tick, 1000)
    }

    render() {
        return (
            <div className={styles.showerContainer}>
                <ShowerHeader/>
                <TrackersContainer/>
                <Graph/>
            </div>
        )
    }
}

export default ActiveShower