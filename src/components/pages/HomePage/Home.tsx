import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import About from 'components/AboutSection/About'
import Clients from 'components/ClientSection/Clients'
import HeroSection from 'components/HeroSection/HeroSection'
import Testimonial from 'components/TestimonialSection/Testimonial'
import Footer from 'components/FooterSection/Footer'

import { homeObjOne, about, testimonials, clients, footer } from './Data'
import './Home.css'

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])
    return (
        <div className="home__section">
            <HeroSection {...homeObjOne} />
            <About
                {...about}
                animationClass="fade-up"
                objectAnimationClass="flip-up"
            />
            <Clients
                {...clients}
                animationClass="fade-up"
                objectAnimationClass="zoom-out"
                delay="500"
            />
            <Testimonial
                {...testimonials}
                animationClass="fade-up"
                objectAnimationClass="zoom-out"
                animationDelay="300"
            />
            <Footer {...footer} animationClass="fade-up" />
        </div>
    )
}

export default Home
