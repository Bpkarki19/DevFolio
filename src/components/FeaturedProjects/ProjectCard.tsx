import styles from "./ProjectCard.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

interface ProjectCardProps {
    image: string | string[]
    title: string
    description: string
    tags: string[]
    projectUrl: string
    codeUrl: string
    viewProjectLabel: string
    viewCodeLabel: string
}

export default function ProjectCard({
    image,
    title,
    description,
    tags,
    projectUrl,
    codeUrl,
    viewProjectLabel,
    viewCodeLabel
}: ProjectCardProps) {
    return (
        <div className={styles.project}>
            {Array.isArray(image) ? (
                <div className={styles.slideshowContainer}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        className={styles.swiperContainer}
                    >
                        {image.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`${title} screenshot ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className={styles.slideshowContainer}>
                    <img src={image} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.buttons}>
                <button onClick={() => window.open(projectUrl, "_blank")}>{viewProjectLabel}</button>
                <button onClick={() => window.open(codeUrl, "_blank")}>{viewCodeLabel}</button>
            </div>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
