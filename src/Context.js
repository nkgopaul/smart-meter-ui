import React, { Component } from 'react'
import firebase from './firebase.js'

const ShowerContext = React.createContext()

class ShowerProvider extends Component {
    state = {
        timeElapsed: 0,
        timeRemaining: 600,
        timeLimit: 600,
        timeStatus: 'GOOD',
        flowCurrent: 0,
        flowRecommended: 0,
        flowStatus: 'GOOD',
        waterTotal: 0,
        waterLimit: 100,
        waterStatus: 'GOOD',
        data: [[]],
        tick: () => {
            const showerRef = firebase.database().ref()
            showerRef.limitToLast(1).once('value').then((snapshot) => {
                const key = Object.keys(snapshot.val())[0];
                const flowRate = parseFloat(snapshot.child(key).child('flow_rate').val())
                const totalFlow = parseFloat(snapshot.child(key).child('total_flow').val())
                const newElapsed = this.state.timeElapsed + 1;
                const newRemaining = this.state.timeRemaining - 1;
                const recFlow = (this.state.waterLimit - totalFlow) / (this.state.timeRemaining / 60)
                let newTimeStatus = this.state.timeStatus
                let newFlowStatus = this.state.flowStatus
                let newWaterStatus = this.state.waterStatus
                let newData = this.state.data

                if(newRemaining < this.state.timeLimit / 5) {
                    newTimeStatus = 'POOR'
                } else if(newRemaining < this.state.timeLimit / 3) {
                    newTimeStatus = 'FAIR'
                }

                if(flowRate > recFlow) {
                    newFlowStatus = 'POOR'
                } else {
                    newFlowStatus = 'GOOD'
                }

                if(totalFlow > this.state.waterLimit * .9) {
                    newWaterStatus = 'POOR'
                } else if(totalFlow > this.state.waterLimit * .7) {
                    newWaterStatus = 'FAIR'
                }

                newData[0].push({
                    x: this.state.timeElapsed,
                    y: this.state.waterTotal,
                })

                this.setState({
                    timeElapsed: newElapsed,
                    timeRemaining: newRemaining,
                    flowCurrent: flowRate,
                    flowRecommended: recFlow,
                    waterTotal: totalFlow,
                    timeStatus: newTimeStatus,
                    flowStatus: newFlowStatus,
                    waterStatus: newWaterStatus,
                    data: newData
                })
            })
        }
    }

    render() {
        return (
            <ShowerContext.Provider value={{state: this.state}}>
                {this.props.children}
            </ShowerContext.Provider>
        )
    }
}

const ShowerConsumer = ShowerContext.Consumer

export { ShowerProvider, ShowerConsumer }