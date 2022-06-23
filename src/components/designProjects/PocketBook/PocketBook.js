import React from 'react'
import styles from './pocketBooks.module.css'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function PocketBook(){

    return (
        <div className={styles.content}>
            <div className={styles.center}>
                <ShowcaseSection>
                    <div className={styles.casestudyDiv}>
                        <img className={styles.casestudyImg} src={require("./images/casestudy.png")} alt="case study" />
                    </div>
                </ShowcaseSection>
            </div>
        </div>
    )

}