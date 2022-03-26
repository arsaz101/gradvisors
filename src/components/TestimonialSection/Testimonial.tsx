import React, { useState } from 'react'
import { TestimonialCard as Card } from 'components/Card/Card'
import './Testimonial.css'
import Slider from 'components/Slider'

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

const Testimonial = ({
    animationClass,
    objectAnimationClass,
    animationDelay,
    heading,
    preHeading,
    quotes,
}: Props) => {
    const [mobileView, setMobileView] = useState(0)

    React.useEffect(() => {
        setMobileView(window.innerWidth < 961 ? 1 : 2)
        console.log(mobileView)
    }, [])

    React.useEffect(() => {
        setMobileView(window.innerWidth < 961 ? 1 : 2)
        console.log(mobileView)
    }, [window.innerWidth])

    const testimonials = Object.keys(quotes).map((index) => (
        <div className="testimonial-bottom-padding">
            <Card
                {...quotes[Number(index)]}
                nameTagClass="secondary-gradient"
            />
        </div>
    ))

    return (
        <div
            className="testimonial__section"
            data-aos={animationClass}
            id="testimonials"
        >
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
                            <Slider
                                slides={testimonials}
                                slidesPerView={mobileView}
                            />
                            {/* <div
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
                                        onClick={() => setActive(Number(index))}
                                    />
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
