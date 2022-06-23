import React from "react";
import styles from "./studyCrew.module.css";
import ShowcaseSection from "../../ShowcaseSection/ShowcaseSection";

export default function StudyCrew() {
    return (
        <div className={styles.content}>
            <div className={styles.center}>
                <ShowcaseSection title="Study Crew">
                    <div>
                    This project consists of UI designs for a hypothetical mobile app called StudyCrew. The app allows users to meet new people that they can revise online with either via a video call or audio call. 
                    </div>
                    <div></div>
                </ShowcaseSection>
                <div className={styles.gallery}>
                    <img
                        className={styles.image}
                        src={require("./images/login.png")}
                        alt="login page"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/group call ui-1.png")}
                        alt="group call ui"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/profile.png")}
                        alt="profile"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/group call ui.png")}
                        alt="group call ui"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/Messeges opened.png")}
                        alt="conversation opened"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/find study partners.png")}
                        alt="find study partners"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/messages - closed.png")}
                        alt="list of conversations"
                    />
                    <img
                        className={styles.image}
                        src={require("./images/messages - opened.png")}
                        alt="conversation opened"
                    />

                    <img
                        className={styles.image}
                        src={require("./images/create a post.png")}
                        alt="create a post"
                    />
                </div>
            </div>
        </div>
    );
}
