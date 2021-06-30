import { Button } from 'components/Button/Button'
import React from 'react'
import './Card.css'
import { formatQuoteIcon } from 'constants/Icons'

type infoCardProps = {
    animationClass?: string
    image?: any
    heading?: string
    desc?: string
    backgroundColor?: string
    showButton?: boolean
}

export const InfoCard = ({
    animationClass,
    image,
    heading,
    desc,
    backgroundColor,
    showButton,
}: infoCardProps) => {
    return (
        <div className="card">
            <div className={`card-container ${backgroundColor}`}>
                <div className="card-container-info" data-aos={animationClass}>
                    <div className="card-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="card-heading">{heading}</div>
                    <div className="card-description">{desc}</div>
                    <div className="card-action-btn">
                        {showButton && (
                            <Button
                                buttonSize="btn--wide"
                                buttonColor="primary-btn"
                            >
                                Choose Plan
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

type testimonialCardProps = {
    quote?: string
    client?: string
    classString?: string
}

export const TestimonialCard = ({
    quote,
    client,
    classString,
}: testimonialCardProps) => {
    return (
        <div className={`card ${classString}`}>
            <div className="card-container">
                <div className="card-quotes-icon">{formatQuoteIcon()}</div>
                <div className="testimonial-card-quote-wrapper">{quote}</div>
                <div className="testimonial-card-client-wrapper">{client}</div>
            </div>
        </div>
    )
}
