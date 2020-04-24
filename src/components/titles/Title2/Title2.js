import React from 'react'
import styles from './title2.module.css'

export default function Title2(props) {
    return (
    <h3 className={styles.title}>{props.institution}
        {
            props.roleTitle &&  <span> (<span className={styles.roleTitle}>{props.roleTitle}</span>) </span>
        }
    </h3>
    )
}
