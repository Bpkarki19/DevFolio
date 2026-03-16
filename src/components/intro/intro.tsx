import styles from "./intro.module.css"
import profileImg from "../../assets/p2.png"
import { useLanguage } from "../../context/LanguageContext"

function highlightText(body: string, highlights: readonly string[]) {
    const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')
    const parts = body.split(regex)

    return parts.map((part, i) => {
        const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase())
        return isHighlight
            ? <span key={i} className={styles.tech}>{part}</span>
            : part
    })
}

export default function Intro() {
    const { t } = useLanguage()

    return (
        <div className={styles.intro}>
            <section className={styles.textContent}>
                <span>{t.intro.greeting}</span>
                <h1>
                    <span className={styles.name}>{t.intro.name}</span>
                    <br />
                    {t.intro.title}
                    <div className={styles.blink}></div>
                </h1>
                <p>
                    {highlightText(t.intro.body, t.intro.techHighlights)}
                </p>
            </section>
            <section className={styles.imageContent}>
                <div className={styles.imageWrapper}>
                    <img src={profileImg} alt="Bipin - Frontend Developer" />
                </div>
            </section>
        </div>
    )
}