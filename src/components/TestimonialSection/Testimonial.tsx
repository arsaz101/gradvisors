import React, { useState } from 'react'
import { TestimonialCard as Card } from 'components/Card/Card'
import './Testimonial.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    animationDelay?: string
    heading?: string
    preHeading?: string
    quotes: {
        client?: string
        quote?: string
    }[]
}

const delay = 8000

const Testimonial = ({
    animationClass,
    objectAnimationClass,
    animationDelay,
    heading,
    preHeading,
    quotes,
}: Props) => {
    const [active, setActive] = useState(0)
    const timeoutRef = React.useRef({})

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(Number(timeoutRef.current))
        }
    }

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setActive((prevIndex) =>
                    prevIndex === quotes?.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )

        return () => {
            resetTimeout()
        }
    }, [active, quotes?.length])

    return (
        <div className="testimonial__section" data-aos={animationClass}>
            <div className="testimonial__wrapper container-sec">
                <div className="testimonial__top-level">
                    <div className="testimonial__heading-wrapper">
                        <div className="top-line secondary-gradient" />
                        <div className="stage">{preHeading}</div>
                        <h2
                            className="testimonial__heading"
                            data-aos={objectAnimationClass}
                        >
                            {heading}
                        </h2>
                    </div>
                </div>
                <div className="testimonial__container">
                    <div className="testimonial__container-row">
                        <div
                            className="testimonial__slideshow"
                            data-aos={objectAnimationClass}
                            data-aos-delay={animationDelay}
                        >
                            <div
                                className="testimonial__slideshow-slider"
                                style={{
                                    transform: `translate3d(${
                                        -active * 100
                                    }%, 0, 0)`,
                                }}
                            >
                                {Object.keys(quotes).map((index) => (
                                    <Card
                                        {...quotes[Number(index)]}
                                        nameTagClass="secondary-gradient"
                                        classString={`${
                                            active === Number(index)
                                                ? ' active'
                                                : ''
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="testimonial__slideshow-slider-indicator">
                                {Object.keys(quotes).map((index) => (
                                    <span
                                        className={`testimonial__slideshow-slider-indicator-dots ${
                                            active === Number(index)
                                                ? ' active'
                                                : ''
                                        }`}
                                        role="presentation"
                                        data-quote={index}
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
