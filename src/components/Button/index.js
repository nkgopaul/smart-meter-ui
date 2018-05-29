import React from 'react'
import styles from './styles.css'

// blue: 7da8e0

const Button = (props) => {
    const { onPress, text, backgroundColor } = props

    return (
        <button onClick={onPress} className={styles.Button} style={{ backgroundColor }}>{text}</button>
    )
}

export default Button