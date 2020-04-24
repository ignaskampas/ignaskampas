import React from 'react'
import styles from './date.module.css'

export default function Date(props) {
    return (
        <div className={styles.date}>
            {props.children}
        </div>
    )
}
