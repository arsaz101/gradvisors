import React, { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import About from 'components/AboutSection/About'
import Clients from 'components/ClientSection/Clients'
import HeroSection from 'components/HeroSection/HeroSection'
import Testimonial from 'components/TestimonialSection/Testimonial'
import Footer from 'components/FooterSection/Footer'

import Contact from 'components/ContactSection/Contact'
import Team from 'components/TeamSection/Team'
import Delayed from 'components/Utils/DelayEffect'

import { heroSection, about, team, testimonials, clients, footer } from './Data'
import './Home.css'

const Home = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    return (
        <div className="home__section">
            <div className="fillBg main-bg" />
            <div className="heroBg" />
            <HeroSection
                {...heroSection}
                animationDuration="500"
                animationDelay="100"
            />
            <div className="combinedBg">
                <About
                    {...about}
                    animationClass="fade-up"
                    objectAnimationClass="zoom-in"
                    animationDuration="1000"
                    delay="550"
                />
            </div>
            <div className="combinedBg2">
                <Team
                    team={team}
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
            </div>

            <Contact animationClass="fade-up" animationDelay="200" />
            <Footer {...footer} />
        </div>
    )
}

export default Home
