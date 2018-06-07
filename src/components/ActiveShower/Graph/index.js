import React, { Component } from 'react'
import { ShowerConsumer } from '../../../Context.js'
import {LineChart} from 'react-easy-chart'
import styles from './styles.css'


class Graph extends Component {
    render() {
        return(
            <div className={styles.graphContainer}>
                <ShowerConsumer>
                    {(context) => (
                        <LineChart
                            axes
                            margin={{top: 25, right: 50, bottom: 50, left: 75}}
                            axisLabels={{x: 'Time', y: 'Flow Rate'}}
                            width={1075}
                            interpolate={'cardinal'}
                            height={400}
                            data={context.state.data}
                       />
                    )}
                </ShowerConsumer>
            </div>
        )
    }
}
export default Graph