import React from 'react'
import styles from './showcaseSection.module.css'
import Title from '../titles/Title/Title'

export default function ShowcaseSection(props) {
    return (
        <section className={styles.showcaseSection} id={props.id}>
            {props.title && <Title title={props.title} />}
            <div className={styles.content}>
                {props.children}
            </div>
        </section>
    )
}
