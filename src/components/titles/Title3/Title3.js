import React from 'react'
import styles from './title3.module.css'

export default function Title3(props) {
    return (
        <h4 className={styles.title} style={props.style}>{props.title}</h4>
    )
}
