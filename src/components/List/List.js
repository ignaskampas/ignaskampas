import React from 'react'
import styles from './list.module.css'

export default function List(props) {
    return (
        <ul className={styles.list} style={props.style}>
            {props.list.map( (item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    )
}
