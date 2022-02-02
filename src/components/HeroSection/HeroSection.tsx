import React from 'react'
import { Button } from 'components/Button/Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { Parallax } from 'react-scroll-parallax'

type Props = {
    animationClass?: string
    animationDuration?: string
    animationDelay?: string
    lightText?: boolean
    lightTextDesc?: boolean
    headline?: string
    highlight?: string
    description?: string
    buttonLabel?: string
    img?: string
    alt?: string
    imgStart?: string
}

const HeroSection = ({
    animationClass,
    animationDuration,
    animationDelay,
    lightText,
    lightTextDesc,
    headline,
    highlight,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}: Props) => {
    return (
        <div
            className="home__hero-section"
            data-aos={animationClass}
            data-aos-duration={animationDuration}
            data-aos-delay={animationDelay}
        >
            <div className="container-sec hero-pd">
                <div
                    className="row home__hero-row"
                    style={{
                        display: 'flex',
                        flexDirection:
                            imgStart === 'start' ? 'row-reverse' : 'row',
                    }}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line secondary-gradient" />
                            <h1
                                className={
                                    lightText ? 'heading' : 'heading dark'
                                }
                            >
                                A{' '}
                                <span className="primary-color">
                                    {highlight}
                                </span>
                                {headline}
                            </h1>
                            <p
                                className={
                                    lightTextDesc
                                        ? 'home__hero-subtitle primary-color'
                                        : 'home__hero-subtitle dark'
                                }
                            >
                                {description}
                            </p>
                            <Link
                                to={{
                                    pathname:
                                        'https://studyabroad.gvisors.com/website',
                                }}
                            >
                                <Button
                                    buttonSize="btn--wide"
                                    buttonColor="secondary-gradient"
                                >
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper fadeIn">
                            <img src={img} alt={alt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
