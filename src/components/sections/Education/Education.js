import React from 'react'
import styles from './education.module.css'
import Title3 from '../../titles/Title3/Title3'
import TitleAndDate from '../../TitleAndDate/TitleAndDate'
import List from '../../List/List'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function Education() {
    return (
        <ShowcaseSection id="education" title="Education">
            <TitleAndDate institution="University of Surrey" roleTitle="Computer Science BSc" date="2016 - 2019" />
            
            <Title3 title="Modules studied include:" />
            <div className={styles.modulesStudied}>
                <Title3 title="3rd year:" />
                <List list={[
                    "Advanced Challenges in Web Technologies", 
                    "Professional Project (Android application)", 
                    "Computer Security", 
                    "Information Security Management", 
                    "Deep Learning and Advanced AI", 
                    "Computational Intelligence"]} />
                <Title3 title="2rd year:" />
                <List list={[
                    "Web Application Development", 
                    "Advanced Algorithms", 
                    "Information Retrieval", 
                    "Object Oriented Design & C++", 
                    "Artificial Intelligence", 
                    "Software Engineering Project", 
                    "Computer Networking"]} />
            </div>

            <TitleAndDate institution="The Radcliffe School" date="2008 - 2016" />
            <List list={[
                "A Levels: Art and Design (A*), Mathematics (B), Chemistry (C)", 
                "AS Levels: Photography (A)", 
                "GCSEs: Additional Mathematics (A*), Mathematics (A), Biology (A), Chemistry (A), Physics (A), D&T: Graphic Products (B), English Language (C), English Literature (C)", 
                "BTEC Level 2: Art and Design (4 Distinction*s), Sport (4 Merits), Business (2 Merits), ICT (Merit)"]} />
        </ShowcaseSection>
    )
}
