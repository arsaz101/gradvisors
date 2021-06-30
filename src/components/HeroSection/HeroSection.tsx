import React from 'react'
import { Button } from 'components/Button/Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'

type Props = {
    animationClass?: string
    lightBg?: boolean
    topLine?: string
    lightText?: boolean
    lightTextDesc?: boolean
    headline?: string
    description?: string
    buttonLabel?: string
    img?: string
    alt?: string
    imgStart?: string
}

const HeroSection = ({
    animationClass,
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}: Props) => {
    return (
        <div
            className={`
                ${
                    lightBg ? 'home__hero-section' : 'home__hero-section darkBg'
                }`}
            data-aos={animationClass}
        >
            <div className="container">
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
                            <div className="top-line">{topLine}</div>
                            <h1
                                className={
                                    lightText ? 'heading' : 'heading dark'
                                }
                            >
                                {headline}
                            </h1>
                            <p
                                className={
                                    lightTextDesc
                                        ? 'home__hero-subtitle'
                                        : 'home__hero-subtitle dark'
                                }
                            >
                                {description}
                            </p>
                            <Link to="/sign-up">
                                <Button
                                    buttonSize="btn--wide"
                                    buttonColor="primary"
                                >
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img
                                src={img}
                                alt={alt}
                                className="home__hero-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
