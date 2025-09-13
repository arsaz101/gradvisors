// Import Swiper React components
import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper styles (Vite-friendly paths)
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
    slides?: JSX.Element[]
    slidesPerView?: number
}

export const Slider = ({ slides = [], slidesPerView = 1 }: Props) => {
    return (
        <Swiper
            modules={[Pagination, Scrollbar]}
            spaceBetween={10}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => swiper.slideNext()}
            autoplay
            onSlideChange={() => console.log('slide change')}
        >
            {slides.map((slide: JSX.Element, idx: number) => (
                <SwiperSlide key={idx}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
