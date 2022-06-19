import React from 'react'
import styles from './designProjectCard.module.css'
import { useNavigate } from 'react-router-dom'

export default function DesignProjectCard(props) {
    const navigate = useNavigate();

    return (
        <div className={styles.project} onClick={() => {navigate(props.link)}}> 
            <div className={styles.heightSetter}>
                <div className={styles.content}>
                    <div className={styles.type}>{props.type}</div>
                    {props.children}
                    <div className={styles.overlay}></div>
                </div>
            </div>
        </div>
    )
}
