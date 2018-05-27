import React from 'react'
import styles from './styles.css'

// blue: 7da8e0

const Button = (props) => {
    const { onPress, title, backgroundColor } = props

    return (
        <button onClick={onPress} className={styles.Button} style={{ backgroundColor }}>{title}</button>
    )
}
s
export default Button