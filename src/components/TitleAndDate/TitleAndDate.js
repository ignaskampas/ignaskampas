import React from 'react'
import styles from './titleAndDate.module.css'
import Title2 from '../titles/Title2/Title2'
import Date from '../Date/Date'

export default function TitleAndDate(props) {
    return (
        <div className={styles.titleAndDate}>
            <Title2 institution={props.institution} roleTitle={props.roleTitle} />
            <Date>{props.date}</Date>
        </div>
    )
}
