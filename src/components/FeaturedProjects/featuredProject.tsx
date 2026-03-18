import styles from "./featuredProject.module.css"
import ProjectCard from "./ProjectCard"
import { useLanguage } from "../../context/LanguageContext"
import morago1 from "../../assets/morago-app/1.png"
import morago2 from "../../assets/morago-app/2.png"
import morago3 from "../../assets/morago-app/3.png"
import morago4 from "../../assets/morago-app/4.png"
import dreamkorea1 from "../../assets/Dream-korea-app/d1.png"
import dreamkorea2 from "../../assets/Dream-korea-app/d2.png"
import dreamkorea3 from "../../assets/Dream-korea-app/d3.png"
import dreamkorea4 from "../../assets/Dream-korea-app/d4.png"
import dreamkorea5 from "../../assets/Dream-korea-app/d5.png"
import dreamkorea6 from "../../assets/Dream-korea-app/d6.png"
import dreamkorea7 from "../../assets/Dream-korea-app/d7.png"
import dreamkorea8 from "../../assets/Dream-korea-app/d8.png"
import dreamkorea9 from "../../assets/Dream-korea-app/d9.png"
import dreamkorea10 from "../../assets/Dream-korea-app/d10.png"
import dreamkorea11 from "../../assets/Dream-korea-app/d11.png"
import dreamkorea12 from "../../assets/Dream-korea-app/d12.png"

import movie1 from "../../assets/movie-search/m1.png"
import movie2 from "../../assets/movie-search/m2.png"
import movie3 from "../../assets/movie-search/m3.png"


export default function FeaturedProject() {
    const { t } = useLanguage()

    const projectMetadata = [
        {
            tags: ["React", "TypeScript", "tailwind css", "Redux Toolkit", ""],
            projectUrl: "https://movie-search-v9ve.vercel.app/",
            codeUrl: "https://github.com/Bpkarki19/MovieSearch.git",
            image: [movie1, movie2, movie3]
        },
        {
            tags: ["vite.js", "WebSocket", "JWT", "WebRTC", "Spring Boot", "SQL"],
            projectUrl: "#",
            codeUrl: "#",
            image: [morago1, morago2, morago3, morago4]
        },
        {
            tags: ["React Native", "TypeScript", "CSS Modules", "Expo", "AI integration"],
            projectUrl: "#",
            codeUrl: "#",
            image: [dreamkorea1, dreamkorea2, dreamkorea3, dreamkorea4, dreamkorea5, dreamkorea6, dreamkorea7, dreamkorea8, dreamkorea9, dreamkorea10, dreamkorea11, dreamkorea12]
        }
    ]

    return (
        <div className={styles.featuredProject}>
            <h1 className={styles.title}>{t.featuredProjects.heading}</h1>
            <p className={styles.description}>{t.featuredProjects.subheading}</p>
            <div className={styles.projects}>
                {t.featuredProjects.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={projectMetadata[index]?.image || ""}
                        tags={projectMetadata[index]?.tags || []}
                        projectUrl={projectMetadata[index]?.projectUrl || "#"}
                        codeUrl={projectMetadata[index]?.codeUrl || "#"}
                        viewProjectLabel={t.featuredProjects.viewProject}
                        viewCodeLabel={t.featuredProjects.viewCode}
                    />
                ))}
            </div>
        </div>
    )
}