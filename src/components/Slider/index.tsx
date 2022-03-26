// Import Swiper React components
import React from 'react'

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
// import 'swiper/css'
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

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
            {slides.map((slide: JSX.Element) => (
                <SwiperSlide>{slide}</SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
