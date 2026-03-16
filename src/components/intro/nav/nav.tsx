import styles from "./nav.module.css"
import { useLanguage } from "../../../context/LanguageContext"

export default function Nav() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}></div>
            <span>DevFolio</span>

            <button
                className={styles.langToggle}
                onClick={toggleLanguage}
                aria-label="Toggle language"
            >
                <span className={`${styles.langOption} ${language === "en" ? styles.active : ""}`}>
                    EN
                </span>
                <span className={styles.divider}>|</span>
                <span className={`${styles.langOption} ${language === "ko" ? styles.active : ""}`}>
                    한국어
                </span>
            </button>
        </nav>
    )
}
