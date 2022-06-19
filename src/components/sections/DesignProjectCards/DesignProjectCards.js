import React from 'react'
import styles from './designProjectCards.module.css' 
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'
import DesignProjectCard from '../../DesignProjectCard/DesignProjectCard'

export default function DesignProjectCards() {
    
    return (
        <ShowcaseSection title="Design Projects">
            <div className={styles.projectsContainer}>
                <DesignProjectCard link="designproject/1" type="Case Study" >
                    <img className={styles.thumbnailImg} src={require('./pocketbook_thumbn.png')} />    
                </DesignProjectCard>
                <DesignProjectCard link="designproject/2" type="UI Designs">
                    <img className={styles.thumbnailImg} src={require('./studycrew_thumbn.png')} />    
                </DesignProjectCard>
                <DesignProjectCard link="designproject/3" type="UI Designs">
                    <img className={styles.thumbnailImg} src={require('./interiordesign.png')} />    
                </DesignProjectCard>
            </div>
        </ShowcaseSection>
    )
}
