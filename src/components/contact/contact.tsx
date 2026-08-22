import type React from "react"
import styles from "./contact.module.css"
import { useLanguage } from "../../context/LanguageContext"

const CONTACT_INFO = {
    email: "bipinkarki9861@gmail.com",
    phoneDisplay: "+82 10-3218-9667",
    phoneHref: "tel:+821032189667",
    facebook: "https://www.facebook.com/bp.karki.94",
    whatsappDisplay: "bipin.dev",
    whatsappHref: "https://wa.me/821032189667",
}

export default function Contact() {
    const { t } = useLanguage()

    const links = [
        {
            label: t.contact.emailLabel,
            value: CONTACT_INFO.email,
            href: `mailto:${CONTACT_INFO.email}`,
            color: "#ea4335",
            icon: (
                <path d="M2.4,4.8h19.2c0.66,0,1.2,0.54,1.2,1.2v12c0,0.66-0.54,1.2-1.2,1.2H2.4c-0.66,0-1.2-0.54-1.2-1.2V6 C1.2,5.34,1.74,4.8,2.4,4.8z M4.2,7.2v0.14l7.8,5.85l7.8-5.85V7.2H4.2z M19.8,9.3l-7.03,5.27c-0.45,0.34-1.07,0.34-1.52,0 L4.2,9.3v7.5h15.6V9.3z" />
            ),
        },
        {
            label: t.contact.phoneLabel,
            value: CONTACT_INFO.phoneDisplay,
            href: CONTACT_INFO.phoneHref,
            color: "#024abc",
            icon: (
                <path d="M6.6,10.8c1.2,2.4,3.2,4.3,5.6,5.6l1.9-1.9c0.24-0.24,0.58-0.31,0.88-0.2c0.97,0.32,2.02,0.5,3.02,0.5 c0.5,0,0.9,0.4,0.9,0.9V19c0,0.5-0.4,0.9-0.9,0.9C9.4,19.9,4.1,14.6,4.1,8c0-0.5,0.4-0.9,0.9-0.9h3.3c0.5,0,0.9,0.4,0.9,0.9 c0,1.05,0.17,2.05,0.5,3.02c0.1,0.3,0.03,0.64-0.2,0.88L6.6,10.8z" />
            ),
        },
        {
            label: t.contact.facebookLabel,
            value: "bp.karki.94",
            href: CONTACT_INFO.facebook,
            color: "#1877f2",
            icon: (
                <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.99,3.66,9.13,8.44,9.88v-6.99H7.9V12h2.54V9.8 c0-2.5,1.49-3.89,3.77-3.89c1.09,0,2.23,0.2,2.23,0.2v2.46h-1.26c-1.24,0-1.63,0.77-1.63,1.56V12h2.78l-0.44,2.89h-2.34v6.99 C18.34,21.13,22,16.99,22,12z" />
            ),
        },
        {
            label: t.contact.whatsappLabel,
            value: CONTACT_INFO.whatsappDisplay,
            href: CONTACT_INFO.whatsappHref,
            color: "#25d366",
            icon: (
                <path d="M12,2C6.48,2,2,6.48,2,12c0,1.85,0.5,3.58,1.38,5.07L2,22l5.07-1.38C8.55,21.5,10.25,22,12,22 c5.52,0,10-4.48,10-10S17.52,2,12,2z M12,20.15c-1.55,0-3-0.43-4.24-1.16l-0.3-0.18l-3.15,0.86l0.84-3.07l-0.2-0.32 C4.35,15,3.85,13.55,3.85,12c0-4.5,3.66-8.15,8.15-8.15S20.15,7.5,20.15,12S16.5,20.15,12,20.15z M16.57,14.15 c-0.25-0.12-1.47-0.72-1.7-0.81c-0.23-0.08-0.39-0.12-0.56,0.12c-0.17,0.25-0.64,0.81-0.78,0.97c-0.14,0.17-0.29,0.19-0.53,0.06 c-0.25-0.12-1.05-0.39-1.99-1.23c-0.74-0.66-1.23-1.47-1.38-1.72c-0.14-0.25-0.02-0.38,0.11-0.51c0.11-0.11,0.25-0.29,0.37-0.43 c0.12-0.14,0.17-0.25,0.25-0.41c0.08-0.17,0.04-0.31-0.02-0.43c-0.06-0.12-0.56-1.35-0.77-1.85c-0.2-0.48-0.41-0.42-0.56-0.42 c-0.14-0.01-0.31-0.01-0.48-0.01s-0.43,0.06-0.66,0.31c-0.23,0.25-0.86,0.84-0.86,2.05s0.88,2.38,1,2.54 c0.12,0.17,1.73,2.64,4.19,3.7c0.59,0.25,1.04,0.4,1.4,0.52c0.59,0.19,1.12,0.16,1.54,0.1c0.47-0.07,1.47-0.6,1.68-1.18 c0.21-0.58,0.21-1.08,0.14-1.18C16.97,14.33,16.82,14.27,16.57,14.15z" />
            ),
        },
    ]

    return (
        <div className={styles.contact}>
            <h1 className={styles.title}>{t.contact.heading}</h1>
            <p className={styles.subtitle}>{t.contact.subheading}</p>
            <div className={styles.grid}>
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={styles.card}
                        style={{ "--accent": link.color } as React.CSSProperties}
                    >
                        <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {link.icon}
                        </svg>
                        <span className={styles.label}>{link.label}</span>
                        <span className={styles.value}>{link.value}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}
