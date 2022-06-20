import React, {useEffect} from 'react'
import styles from './interiorDesign.module.css'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'
import Slideshow from '../../Slideshow/Slideshow'

export default function InteriorDesign(){

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
    }, [])

    return (
        <div className={styles.content}>
            <div className={styles.center}>
                <ShowcaseSection title="Interior Design Website">
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <div></div>
                </ShowcaseSection>
            </div>
            <Slideshow />
        </div>
    )
}