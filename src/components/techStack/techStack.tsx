import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './techStack.module.css';

const techStack = [
    { name: 'JavaScript', color: '#f7df1e', icon: <path fill="#f7df1e" d="M1.64 0h20.73c.9 0 1.63.73 1.63 1.63v20.74c0 .9-.73 1.63-1.63 1.63H1.64c-.9 0-1.64-.73-1.64-1.63V1.63C0 .73.74 0 1.64 0zm13.11 18.25V19l.06-.01c.25.43.51.81.8 1.14.3.33.64.59 1.05.77.42.18.89.27 1.45.27.67 0 1.25-.16 1.72-.48.47-.32.84-.78 1.11-1.37.27-.59.41-1.32.41-2.2v-7.14h-3.41V17c0 .48-.09.84-.25 1.08-.17.24-.44.36-.8.36-.26 0-.48-.06-.65-.18-.17-.12-.31-.29-.42-.51l-.06-.11zM11.97 10h-3.43v1.89h-.06a2.83 2.83 0 0 0-.69-.7c-.24-.15-.56-.23-.97-.23-1 0-1.8.44-2.4 1.33C3.83 13.17 3.53 14.52 3.53 16s.3 2.82.9 3.7c.6 1 1.4 1.47 2.4 1.47 1.02 0 1.83-.5 2.44-1.5v.03h.06v1.3H12V10zm-3.41 6s-.06.75-.18 1.12-.33.68-.62.92c-.29.24-.65.36-1.07.36s-.78-.12-1.07-.36c-.29-.24-.5-.54-.62-.92-.12-.37-.18-1.12-.18-1.12s.06-.77.18-1.14c.12-.37.33-.67.62-.91.29-.24.65-.36 1.07-.36s.78.12 1.07.36.5.54.62.91c.11.37.18 1.14.18 1.14z" /> },
    { name: 'React', color: '#61dafb', icon: <g fill="none" stroke="#61dafb" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="11" ry="4.2" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="2" fill="#61dafb" /></g> },
    { name: 'Vue.js', color: '#41b883', icon: <path fill="#41b883" d="M24,1.6L12,22.4L0,1.6h5.3l6.7,11.6l6.7-11.6H24z M18.3,1.6L12,12.5L5.7,1.6h4.5l1.8,3.1l1.8-3.1H18.3z" /> },
    { name: 'Node.js', color: '#339933', icon: <path fill="#339933" d="M12,0.5l10.3,6v10.9L12,23.5L1.7,17.4V6.5L12,0.5z M12,2.7L4,7.3v9.4l8,4.6l8-4.6V7.3L12,2.7z M12,5.2c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1S10.3,5.2,12,5.2z" /> },
    { name: 'TypeScript', color: '#3178c6', icon: <path fill="#3178c6" d="M0,0h24v24H0V0z M21.5,19.2c0-2-1.2-3.4-3.4-4.3c-1.3-0.5-2.1-0.9-2.1-1.7c0-0.7,0.6-1.1,1.5-1.1c1,0,1.6,0.4,2,1.2l2.3-1.4 c-0.8-1.4-2.2-2.3-4.3-2.3c-2.4,0-4.1,1.5-4.1,3.7c0,2.1,1.4,3.1,3.7,4c1,0.4,1.8,0.8,1.8,1.8c0,0.8-0.7,1.2-1.7,1.2 c-1.2,0-2-0.6-2.5-1.7l-2.3,1.3c0.8,1.8,2.4,2.9,4.8,2.9C20,23,21.5,21.5,21.5,19.2z M10.6,22.7H2.5v-2.5h2.9V4.8H2.5V2.3h10.6v2.5 h-2.9v15.2l2.4,0L10.6,22.7z" /> },
    { name: 'Next.js', color: '#000000', icon: <path fill="#000" d="M12,0C5.37,0,0,5.37,0,12s5.37,12,12,12s12-5.37,12-12S18.63,0,12,0z M19,19l-7.38-9.5H10V18h-2V7h2l7,9V7h2V19z" /> },
    { name: 'Tailwind', color: '#38bdf8', icon: <path fill="#38bdf8" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" /> },
    { name: 'Bootstrap', color: '#7952b3', icon: <path fill="#7952b3" d="M11.9,0.5L1.6,6.5v10.9L12,23.5l10.3-6.1V6.5L12,0.5z M12,21.5l-8.5-4.9V7.4L12,2.5l8.5,4.9v9.2L12,21.5z M9.1,16.5h3.9 c2,0,3.6-1,3.6-2.9c0-1.4-1-2.4-2.4-2.7v-0.1c1-0.4,1.8-1.4,1.8-2.6c0-1.7-1.4-2.6-3.2-2.6H9.1V16.5z M11.1,7.2h1.6c1.1,0,1.8,0.5,1.8,1.4s-0.7,1.4-1.8,1.4h-1.6V7.2z M11.1,11.5h1.8 c1.2,0,2.1,0.6,2.1,1.6c0,1-0.9,1.7-2.1,1.7h-1.8V11.5z" /> },
];

export default function TechStack() {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className={styles.swiper}
            >
                {techStack.map((tech, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.card} style={{ '--hover-color': tech.color } as React.CSSProperties}>
                            <svg className={styles.svgIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {tech.icon}
                            </svg>
                            <span className={styles.name}>{tech.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
