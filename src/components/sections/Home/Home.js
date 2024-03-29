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
                <div className={styles.introMessage}>A solution driven Front End Developer with passion for creating visually appealing and user-friendly websites, actively seeking freelance opportunities to turn your digital vision into an unforgettable online presence. With 1 year of commercial front-end development experience, I am confident in my ability to bring your ideas to life and exceed your expectations.</div>
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
