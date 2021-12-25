import React, { useState } from 'react'
import './Clients.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    delay?: string
    heading?: string
    preHeading?: string
    logos: string[]
}

const sliderDelay = 2500

const Clients = ({
    animationClass,
    objectAnimationClass,
    delay,
    heading,
    preHeading,
    logos,
}: Props) => {
    const [active, setActive] = useState(0)
    const [sliderLength, setSliderLength] = useState(1)
    const timeoutRef = React.useRef({})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(Number(timeoutRef.current))
        }
    }

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight !== windowWidth)
                setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    })

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setActive((prevIndex) =>
                    prevIndex === sliderLength - 1 ? 0 : prevIndex + 1
                ),
            sliderDelay
        )

        return () => {
            resetTimeout()
        }
    }, [active, logos?.length])

    React.useEffect(() => {
        setSliderLength(
            windowWidth > 960
                ? Math.ceil(logos.length / 6)
                : Math.ceil(logos.length)
        )

        console.log(sliderLength)
    })

    return (
        <div
            className="clients__section clientBg container-sec"
            data-aos={animationClass}
        >
            <div className="clients__wrapper">
                <div className="top-line secondary-gradient" />
                <div className="stage">{preHeading}</div>
                <div className="clients__heading">
                    <h2 className="clients__top-line">{heading}</h2>
                </div>
                <div className="clients__panel">
                    <div className="clients__container">
                        <div className="clients__container-row">
                            <div
                                className="client__slideshow"
                                data-aos={objectAnimationClass}
                            >
                                <div
                                    className="client__slideshow-slider"
                                    style={{
                                        transform: `translate3d(${
                                            -active * 100
                                        }%, 0, 0)`,
                                    }}
                                >
                                    {Object.keys(logos).map((index) => (
                                        <div className="clients__container-col">
                                            <img
                                                src={logos[Number(index)]}
                                                alt=""
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="testimonial__slideshow-slider-indicator">
                                    {Object.keys(logos)
                                        .splice(0, sliderLength)
                                        .map((index) => (
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
        </div>
    )
}

export default Clients
