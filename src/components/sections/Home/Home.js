import React from 'react'
import styles from './home.module.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

export default function Home() {
    return (
        <section className={styles.home} id="home">
            <div className={styles.content}>
                <div className={styles.imgAndContactDetails}>
                    <img className={styles.profileImg} src={require('./img/profileImg.jpg')} alt="Face"/>
                    <div className={styles.nameAndContactDetails}>
                        <span className={styles.nameContainer}>
                            <h1 className={styles.name}>Ignas <span className={styles.colouredText}>Kampas</span></h1>
                        </span>
                        <span className={styles.contactDetailsContainer}>
                            <div className={styles.contactDetails}>Wellingborough · <span className={styles.colouredText}>ignaskampas1@gmail.com</span></div>
                        </span>
                    </div>
                </div>
                <div className={styles.introMessage}>A solution driven freelance Web Developer seeking a role as a Front-End Web Developer or freelance work. An individual who works effectively both in a team and independently with a proven history of high standards and passion for web development.</div>
                <div className={styles.icons}>

                </div>
                <a aria-label="See my linked-in profile" href="https://uk.linkedin.com/in/ignas-kampas-8469a3ba" target="_blank">
                    <FaLinkedin className={styles.icon}/>
                </a>
                <a aria-label="see my github profile" href="https://github.com/ignaskampas" target="_blank">
                    <FaGithubSquare className={styles.icon}/>
                </a>
            </div>
        </section>
    )
}
