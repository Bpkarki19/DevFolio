import styles from "./featuredProject.module.css"
import ProjectCard from "./ProjectCard"
import { useLanguage } from "../../context/LanguageContext"
import masterhangul1 from "../../assets/masterhangul-web/mh1.png"
import masterhangul2 from "../../assets/masterhangul-web/mh2.png"
import masterhangul3 from "../../assets/masterhangul-web/mh3.png"
import masterhangul4 from "../../assets/masterhangul-web/mh4.png"
import morago1 from "../../assets/morago-app/1.png"
import morago2 from "../../assets/morago-app/2.png"
import morago3 from "../../assets/morago-app/3.png"
import morago4 from "../../assets/morago-app/4.png"
import masterhangulapp1 from "../../assets/masterhangul-mobile-app/d1.png"
import masterhangulapp2 from "../../assets/masterhangul-mobile-app/d2.png"
import masterhangulapp3 from "../../assets/masterhangul-mobile-app/d3.png"
import masterhangulapp4 from "../../assets/masterhangul-mobile-app/d4.png"
import masterhangulapp5 from "../../assets/masterhangul-mobile-app/d5.png"
import masterhangulapp6 from "../../assets/masterhangul-mobile-app/d6.png"
import masterhangulapp7 from "../../assets/masterhangul-mobile-app/d7.png"
import masterhangulapp8 from "../../assets/masterhangul-mobile-app/d8.png"
import masterhangulapp9 from "../../assets/masterhangul-mobile-app/d9.png"
import masterhangulapp10 from "../../assets/masterhangul-mobile-app/d10.png"
import masterhangulapp11 from "../../assets/masterhangul-mobile-app/d11.png"
import masterhangulapp12 from "../../assets/masterhangul-mobile-app/d12.png"

import ksc1 from "../../assets/korea-salary-calculator/k1.jpg"
import ksc2 from "../../assets/korea-salary-calculator/k2.jpg"
import ksc3 from "../../assets/korea-salary-calculator/k3.jpg"
import ksc4 from "../../assets/korea-salary-calculator/k4.jpg"
import ksc5 from "../../assets/korea-salary-calculator/k5.jpg"

import movie1 from "../../assets/movie-search/m1.png"
import movie2 from "../../assets/movie-search/m2.png"
import movie3 from "../../assets/movie-search/m3.png"

import f1 from "../../assets/FinancialApp/f1.png"
import f2 from "../../assets/FinancialApp/f2.png"

import nest1 from "../../assets/codeNest/nest1.png"

import gh1 from "../../assets/ghar-bazar/gh1.png"
import gh2 from "../../assets/ghar-bazar/gh2.png"
import gh3 from "../../assets/ghar-bazar/gh3.png"

import g1 from "../../assets/guras/g1.png"
import g2 from "../../assets/guras/g2.png"
import g3 from "../../assets/guras/g3.png"

export default function FeaturedProject() {
    const { t } = useLanguage()

    const projectMetadata = [
        {
            tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            projectUrl: "https://masterhangul.com",
            image: [masterhangul1, masterhangul2, masterhangul3, masterhangul4],
            status: "live" as const
        },
        {
            tags: ["React Native", "TypeScript", "CSS Modules", "Expo", "AI integration"],
            projectUrl: "#",
            image: [masterhangulapp1, masterhangulapp2, masterhangulapp3, masterhangulapp4, masterhangulapp5, masterhangulapp6, masterhangulapp7, masterhangulapp8, masterhangulapp9, masterhangulapp10, masterhangulapp11, masterhangulapp12],
            status: "closed-testing" as const
        },
        {
            tags: ["React Native", "TypeScript", "Expo", "AsyncStorage", "Google AdMob"],
            projectUrl: "#",
            image: [ksc1, ksc2, ksc3, ksc4, ksc5],
            status: "closed-testing" as const
        },
        {
            tags: ["React", "TypeScript", "tailwind css", "Redux Toolkit", ""],
            projectUrl: "https://movie-search-v9ve.vercel.app/",
            codeUrl: "https://github.com/Bpkarki19/MovieSearch.git",
            image: [movie1, movie2, movie3]
        },
        {
            tags: ["vite.js", "WebSocket", "JWT", "WebRTC", "Spring Boot", "SQL"],
            projectUrl: "https://morago-b1nt06akb-bipin-karkis-projects.vercel.app/",
            codeUrl: "https://github.com/Bpkarki19/Morago-app.git",
            image: [morago1, morago2, morago3, morago4]
        },
        {
            tags: ["React", "TypeScript","vite.js", "CSS Modules", "supabase"],
            projectUrl: "https://personal-ca.vercel.app/",
            image: [f1,f2]
        },
        {
            tags: ["React", "TypeScript", "tailwind css", "Redux Toolkit", ""],
            projectUrl: "https://code-nest-gray.vercel.app/",
            image: [nest1]
        },
        {
            tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            projectUrl: "https://ghar-bazar.vercel.app/",
            image: [gh1, gh2, gh3]
        },
        {
            tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            projectUrl: "https://guras.vercel.app/",
            image: [g1, g2, g3]
        }
    ]

    return (
        <div className={styles.featuredProject}>
            <h1 className={styles.title}>{t.featuredProjects.heading}</h1>
            <p className={styles.description}>{t.featuredProjects.subheading}</p>
            <div className={styles.projects}>
                {t.featuredProjects.projects.map((project, index) => {
                    const status = projectMetadata[index]?.status
                    const statusLabel = status === "live"
                        ? t.featuredProjects.statusLive
                        : status === "closed-testing"
                            ? t.featuredProjects.statusClosedTesting
                            : undefined

                    return (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={projectMetadata[index]?.image || ""}
                            tags={projectMetadata[index]?.tags || []}
                            projectUrl={projectMetadata[index]?.projectUrl || "#"}
                            codeUrl={projectMetadata[index]?.codeUrl}
                            viewProjectLabel={t.featuredProjects.viewProject}
                            viewCodeLabel={t.featuredProjects.viewCode}
                            status={status}
                            statusLabel={statusLabel}
                        />
                    )
                })}
            </div>
        </div>
    )
}