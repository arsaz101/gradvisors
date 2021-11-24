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
                    prevIndex === logos?.length / 2 ? 0 : prevIndex + 1
                ),
            sliderDelay
        )

        return () => {
            resetTimeout()
        }
    }, [active, logos?.length])
    return (
        <div className="clients__section clientBg" data-aos={animationClass}>
            <div className="clients__wrapper">
                <div className="top-line secondary-gradient" />
                <div className="stage">{preHeading}</div>
                <div className="clients__heading">
                    <h2 className="clients__top-line">{heading}</h2>
                </div>
                <div className="clients__panel">
                    <div className="clients__container">
                        {logos && (
                            <div
                                className="clients__container-row"
                                style={{
                                    transform: `translate3d(${
                                        -active * 25
                                    }%, 0, 0)`,
                                }}
                            >
                                {Object.keys(logos).map((index) => (
                                    <div
                                        className="clients__container-col"
                                        // data-aos={objectAnimationClass}
                                        // data-aos-delay={`${
                                        //     Number(index) % 2 === 0
                                        //         ? delay
                                        //         : '0'
                                        // }`}
                                    >
                                        <img
                                            src={logos[Number(index)]}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
