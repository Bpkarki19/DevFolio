export const translations = {
    en: {
        // ── Nav ──────────────────────────────────────────────────────────
        nav: {
            brand: "DevFolio",
        },

        // ── Intro ────────────────────────────────────────────────────────
        intro: {
            greeting: "Hi, I'm",
            name: "Bipin ,",
            title: "Frontend Developer",
            body: "I work mainly with React, Vue.js, Next.js, and TypeScript, and I'm currently expanding my skills in backend development with Spring Boot and MySQL. My goal is to build clean, efficient, and visually engaging digital experiences.",
            techHighlights: ["React", "Vue.js", "Next.js", "TypeScript", "backend development", "Spring Boot", "MySQL"],
        },

        // ── About Me ─────────────────────────────────────────────────────
        aboutMe: {
            heading: "About Me",
            body: "I began learning programming out of curiosity about how software and websites are made. Over time, I grew passionate about frontend engineering — especially creating interactive, visually clear, and responsive designs using React and TypeScript. Recently, I've been expanding my understanding of backend technologies such as Spring Boot and MySQL to strengthen my full-stack foundation. I value clean code, teamwork, and building projects that make a real difference.",
            techHighlights: ["programming", "grew passionate", "frontend engineering", "React", "TypeScript", "Spring Boot", "MySQL"],
        },

        // ── Tech Stack ───────────────────────────────────────────────────
        techStack: {
            heading: "Tech Stack",
        },

        // ── Add new page translations below ──────────────────────────────
        // Example:
        // projects: {
        //     heading: "My Projects",
        //     viewCode: "View Code",
        //     liveDemo: "Live Demo",
        // },
        // contact: {
        //     heading: "Get In Touch",
        //     namePlaceholder: "Your Name",
        //     emailPlaceholder: "Your Email",
        //     send: "Send Message",
        // },
        featuredProjects: {
            heading: "Featured Projects",
            subheading: "Here are some of my featured projects:",
            viewProject: "View Project",
            viewCode: "View Code",
            projects: [
                {
                    title: "Morago",
                    description: "Its an app which helps foreigner who don't know korean language.",
                },
                {
                    title: "Dream Korea",
                    description: "A place where user can learn korean language and culture.Its in a development phase and will be launched soon in Play Store and App Store.",
                }
            ]
        },
    },

    ko: {
        // ── Nav ──────────────────────────────────────────────────────────
        nav: {
            brand: "DevFolio",
        },

        // ── Intro ────────────────────────────────────────────────────────
        intro: {
            greeting: "안녕하세요, 저는",
            name: "비핀 ,",
            title: "프론트엔드 개발자",
            body: "주로 React, Vue.js, Next.js, TypeScript를 사용하며, 현재 Spring Boot와 MySQL을 통한 백엔드 개발 역량을 확장하고 있습니다. 깔끔하고 효율적이며 시각적으로 매력적인 디지털 경험을 만드는 것이 목표입니다.",
            techHighlights: ["React", "Vue.js", "Next.js", "TypeScript", "백엔드 개발", "Spring Boot", "MySQL"],
        },

        // ── About Me ─────────────────────────────────────────────────────
        aboutMe: {
            heading: "소개",
            body: "소프트웨어와 웹사이트가 어떻게 만들어지는지 궁금해서 프로그래밍을 배우기 시작했습니다. 시간이 지나면서 프론트엔드 엔지니어링에 열정을 갖게 되었으며, 특히 React와 TypeScript를 사용해 인터랙티브하고 시각적으로 명확한 반응형 디자인을 만드는 것에 집중하고 있습니다. 최근에는 Spring Boot와 MySQL 같은 백엔드 기술도 학습하며 풀스택 역량을 강화하고 있습니다. 깔끔한 코드, 팀워크, 그리고 실제로 도움이 되는 프로젝트를 만드는 것을 중요하게 생각합니다.",
            techHighlights: ["프로그래밍", "열정을 갖게", "프론트엔드 엔지니어링", "React", "TypeScript", "Spring Boot", "MySQL"],
        },

        // ── Tech Stack ───────────────────────────────────────────────────
        techStack: {
            heading: "기술 스택",
        },

        // ── Add new page translations below ──────────────────────────────
        // projects: {
        //     heading: "프로젝트",
        //     viewCode: "코드 보기",
        //     liveDemo: "라이브 데모",
        // },
        // contact: {
        //     heading: "연락하기",
        //     namePlaceholder: "이름",
        //     emailPlaceholder: "이메일",
        //     send: "메시지 보내기",
        // },
        featuredProjects: {
            heading: "주요 프로젝트",
            subheading: "제가 진행한 주요 프로젝트들을 소개합니다:",
            viewProject: "프로젝트 보기",
            viewCode: "코드 보기",
            projects: [
                {
                    title: "Morago",
                    description: "한국어를 모르는 외국인들을 위한 앱입니다.",
                },
                {
                    title: "드림 코리아",
                    description: "한국어를 배우고 문화를 체험할 수 있는 공간입니다. 현재 개발 단계에 있으며 곧 플레이 스토어와 앱 스토어에 출시될 예정입니다.",
                }
            ]
        },
    },
} as const

interface SectionWithBody {
    heading: string
    body: string
    techHighlights: readonly string[]
}

export interface Translations {
    nav: { brand: string }
    intro: {
        greeting: string
        name: string
        title: string
        body: string
        techHighlights: readonly string[]
    }
    aboutMe: SectionWithBody
    techStack: { heading: string }
    featuredProjects: {
        heading: string
        subheading: string
        viewProject: string
        viewCode: string
        projects: readonly { title: string; description: string }[]
    }
}

export type Language = keyof typeof translations

