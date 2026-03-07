import styles from "./nav.module.css"

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}></div>
            <span>DevFolio</span>
        </nav>
    )
}
