declare module 'swiper/css';
declare module 'swiper/css/pagination';
declare module 'swiper/css/navigation';
declare module 'swiper/css/autoplay';
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
