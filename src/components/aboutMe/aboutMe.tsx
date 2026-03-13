import styles from "./aboutMe.module.css"

import TechStack from "../techStack/techStack"

export default function AboutMe() {
    return (
        <div className={styles.aboutMe}>
            <h1>About Me</h1>
            <p>I began learnign <span className="highlight">programming </span>
                out of curiosity about how software and websites are made.
                Over time, <span className="highlight">grew passionate </span>
                about <span className="highlight">frontend engineering </span>
                — especially creating interactive,
                visually clear, and responsive designs using <span className="highlight">React </span>
                and <span className="highlight">TypeScript </span>.
                Recently, I’ve been expanding my understanding of backend technologies
                such as <span className="highlight">Spring Boot </span> and
                <span className="highlight">MySQL </span> to strengthen my full-stack foundation.

                I value clean code, teamwork, and building projects that make a real difference.
            </p>
            <TechStack />
        </div>
    )
}