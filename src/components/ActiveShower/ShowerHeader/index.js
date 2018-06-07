import React from 'react'
import styles from './styles.css'
import Button from '../../Button/index.js'

const ShowerHeader = () => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>Current Shower</span>
            <span className={styles.buttonContainer}>
                <Button
                    onPress={onCancel}
                    text="Cancel"
                    backgroundColor="#FF8080"
                />
                <Button
                    onPress={onFinish}
                    text="Finish"
                    backgroundColor="#7da8e0"
                />
            </span>
        </div>
    )
}

const onCancel = () => {
    console.log("Cancel Shower")
}

const onFinish = () => {
    console.log("Finish Shower")
}

export default ShowerHeader