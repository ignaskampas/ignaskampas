import React, {useEffect} from 'react'
import styles from './interiorDesign.module.css'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'
import Slideshow from './Slideshow/Slideshow'

export default function InteriorDesign(){

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, [])

    return (
        <div className={styles.content}>
            <div className={styles.center}>
                <ShowcaseSection title="Interior Design Website">
                    <div >This project consists of website UI designs for a hypothetical interior design company called DesignRise.</div>
                    <div></div>
                </ShowcaseSection>
            </div>
            <Slideshow />
        </div>
    )
}