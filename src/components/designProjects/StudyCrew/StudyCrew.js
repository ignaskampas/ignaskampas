import React from "react";
import styles from "./studyCrew.module.css";
import ShowcaseSection from "../../ShowcaseSection/ShowcaseSection";

export default function StudyCrew() {
    return (
        <div className={styles.content}>
            <div className={styles.center}>
                <ShowcaseSection title="Study Crew">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
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
