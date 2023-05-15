import React from 'react'
import styles from './skills.module.css'
import Title3 from '../../titles/Title3/Title3'
import List from '../../List/List'
import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

function SkillList(props){
    return <List style={{marginBottom: 0, width: '100%'}} list={props.list} />
}

export default function Skills() {
    return (
        <ShowcaseSection id="skills" title="Skills">
            <div className={styles.skillsContainer}>
            <div>
                    <Title3 title="Programming Languages" />
                    <SkillList list={[
                        "JavaScript", 
                        "HTML5", 
                        "CSS3", 
                        "Sass", 
                        "LESS",
                        "Python", 
                        "Java",
                        "PHP",
                        "XML"]} />
                </div>
                <div>
                    <Title3 title="Frameworks" />
                    <SkillList list={[
                        "React", "Vue", "Laravel", "Bootstrap"]} />
                </div>
                <div>
                    <Title3 title="Content Management Systems" />
                    <SkillList list={[
                        "WordPress"]} />
                </div>
                <div>
                    <Title3 title="State Management Tools" />
                    <SkillList list={[
                        "Redux"]} />
                </div>
                <div>
                    <Title3 title="Transpilers" />
                    <SkillList list={[
                        "Babel"]} />
                </div>
                <div>
                    <Title3 title="Module Bundlers" />
                    <SkillList list={[
                        "Webpack"]} />
                </div>
            
                <div>
                    <Title3 title="Database Languages and Platforms" />
                    <SkillList list={[
                        "MySQL",
                        "SQLite", 
                        "Firebase (Realtime Database)"]} />
                </div>
                <div>
                    <Title3 title="Mobile development" />
                    <SkillList list={[
                        "Android Development"]} />
                </div>
                <div>
                    <Title3 title="Version Control" />
                    <SkillList list={[
                        "Git", 
                        "GitHub", 
                        "Bitbucket"]} />
                </div>
            </div>
        </ShowcaseSection>
    )
}
