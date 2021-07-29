import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import About from 'components/AboutSection/About'
import Clients from 'components/ClientSection/Clients'
import HeroSection from 'components/HeroSection/HeroSection'
import Testimonial from 'components/TestimonialSection/Testimonial'
import Footer from 'components/FooterSection/Footer'

import Contact from 'components/ContactSection/Contact'
import Team from 'components/TeamSection/Team'
import { homeObjOne, about, testimonials, clients, footer } from './Data'
import './Home.css'

const Home = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    return (
        <div className="home__section">
            <HeroSection {...homeObjOne} animationDuration="800" />
            <About
                {...about}
                animationClass="fade-up"
                objectAnimationClass="zoom-in"
                animationDuration="1000"
            />
            <Team
                {...about}
                animationClass="fade-up"
                objectAnimationClass="zoom-in"
                animationDuration="1000"
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
            <Contact animationClass="fade-up" animationDelay="800" />
            <Footer {...footer} animationClass="fade-up" animationDelay="800" />
        </div>
    )
}

export default Home
