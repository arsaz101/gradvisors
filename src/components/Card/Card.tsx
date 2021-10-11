import { Button } from 'components/Button/Button'
import React from 'react'
import './Card.css'
import { formatQuoteIcon } from 'constants/Icons'

type infoCardProps = {
    animationClass?: string
    animationDuration?: string
    image?: any
    heading?: string
    cardHeadingClass?: string
    desc?: string
    descClass?: string
    backgroundColor?: string
    imageClass?: string
    buttonText?: string
    buttonClass?: string
}

export const InfoCard = ({
    animationClass,
    animationDuration,
    image,
    heading,
    cardHeadingClass = '',
    desc,
    descClass = '',
    backgroundColor = '',
    imageClass = '',
    buttonText,
    buttonClass,
}: infoCardProps) => {
    return (
        <div className="card">
            <div className={`card-container ${backgroundColor}`}>
                <div
                    className="card-container-info"
                    data-aos={animationClass}
                    data-aos-duration={animationDuration}
                >
                    <div className={`card-image ${imageClass}`}>
                        <img src={image} alt="" />
                    </div>
                    <h3 className={`card-heading ${cardHeadingClass}`}>
                        {heading}
                    </h3>
                    <div className={`card-description ${descClass}`}>
                        {desc}
                    </div>
                    <div className={`card-action-btn ${buttonClass}`}>
                        {buttonText && (
                            <Button
                                buttonSize="btn--wide"
                                buttonColor="primary-btn"
                            >
                                {buttonText}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

type testimonialCardProps = {
    animationClass?: string
    animationDuration?: string
    nameTagClass?: string
    quote?: string
    client?: string
    classString?: string
}

export const TestimonialCard = ({
    animationClass,
    animationDuration,
    nameTagClass = '',
    quote,
    client,
    classString,
}: testimonialCardProps) => {
    return (
        <div className={`card ${classString}`}>
            <div
                className="card-container"
                data-aos={animationClass}
                data-aos-duration={animationDuration}
            >
                <div className="card-quotes-icon">{formatQuoteIcon()}</div>
                <div className="testimonial-card-quote-wrapper">{quote}</div>
                <div
                    className={`testimonial-card-client-wrapper ${nameTagClass}`}
                >
                    {client}
                </div>
            </div>
        </div>
    )
}
