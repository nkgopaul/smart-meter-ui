import React, { Component } from 'react'
import styles from './styles.css'
import Tracker from './Tracker/index.js'
import { ShowerConsumer } from '../../../Context.js'

// props - title, limit, curr_label, est_label
// state - current
const indicators = {
    POOR: '#FFCBCB',
    FAIR: '#FFEFCB',
    GOOD: '#FFF',
}

class TrackersContainer extends Component {
    formatTime(sec) {
        const minutes = Math.floor(sec/60)
        const seconds = sec%60
        return (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
    }

    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    render() {
        return (
            <div className={styles.trackersContainer}>
                <ShowerConsumer>
                    {(context) => (
                        <React.Fragment>
                            <Tracker
                                title='TIME'
                                currVal={this.formatTime(context.state.timeElapsed)}
                                currLabel={'Elapsed'}
                                estVal={this.formatTime(context.state.timeRemaining)}
                                estLabel={'Remaining'}
                                backgroundColor={indicators[context.state.timeStatus]}
                            />
                            <Tracker
                                title='FLOW RATE (L/min)'
                                currVal={context.state.flowCurrent}
                                currLabel={'Current'}
                                estVal={this.round(context.state.flowRecommended,2)}
                                estLabel={'Recommended'}
                                backgroundColor={indicators[context.state.flowStatus]}
                            />
                            <Tracker
                                title='WATER USE (L)'
                                currVal={context.state.waterTotal}
                                currLabel={'Total'}
                                estVal={context.state.waterLimit}
                                estLabel={'Limit'}
                                backgroundColor={indicators[context.state.waterStatus]}
                            />
                        </React.Fragment>
                    )}
                </ShowerConsumer>
            </div>
        )
    }
}

export default TrackersContainer