import React from 'react'
import './styles.css'

const Button = (props) => {
    console.log(primary)
    const { onPress, title, backgroundColor } = props

    return (
        <button onClick={onPress} className={styles.Button} style={{ backgroundColor }}>{title}</button>
    )
}

export default Button