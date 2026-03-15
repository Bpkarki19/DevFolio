import styles from "./intro.module.css"
import profileImg from "../../assets/p2.jpg"

export default function Intro() {
    return (
        <div className={styles.intro}>
            <section className={styles.left}>
                <span>Hi, I'm</span>
                <h1>Bipin ,<br />Frontend Developer<div className={styles.blink}></div></h1>
                <p>
                    I work mainly with <span className={styles.tech}>React</span>,
                    <span className={styles.tech}>Vue.js</span>,
                    <span className={styles.tech}>Next.js</span>, and <br />
                    <span className={styles.tech}>TypeScript</span>, and  i'm
                    currently expanding my skills in
                    <span className={styles.tech}>backend development</span> with
                    <span className={styles.tech}>Spring Boot</span> and <span className={styles.tech}>MySQL</span>.
                    My goal is to build clean, efficient, and visually
                    engaging digital experiences.
                </p>

            </section>
            <section className={styles.right}>
                <div className={styles.imageWrapper}>
                    <img src={profileImg} alt="Bipin - Frontend Developer" />
                </div>
            </section>
        </div>
    )
}