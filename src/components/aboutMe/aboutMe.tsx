import styles from "./aboutMe.module.css"
import TechStack from "../techStack/techStack"
import { useLanguage } from "../../context/LanguageContext"

function highlightText(body: string, highlights: readonly string[]) {
    const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
    const parts = body.split(regex)

    return parts.map((part, i) => {
        const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase())
        return isHighlight
            ? <span key={i} className="highlight">{part} </span>
            : part
    })
}

export default function AboutMe() {
    const { t } = useLanguage()

    return (
        <div className={styles.aboutMe}>
            <h1>{t.aboutMe.heading}</h1>
            <p>
                {highlightText(t.aboutMe.body, t.aboutMe.techHighlights)}
            </p>
            <TechStack />
        </div>
    )
}