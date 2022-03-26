import React, { useState } from 'react'
import './Clients.css'
import Slider from 'components/Slider'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    delay?: string
    heading?: string
    preHeading?: string
    logos: string[][]
}

const Clients = ({
    animationClass,
    objectAnimationClass,
    delay,
    heading,
    preHeading,
    logos,
}: Props) => {
    const clients = Object.keys(logos).map((index) => (
        <div className="slider-comp active">
            <div className="clients__container-col">
                {logos[Number(index)].map((imgObj, i) => (
                    <div className="clients__container-col-internal">
                        <img src={imgObj} alt="" />
                    </div>
                ))}
            </div>
        </div>
    ))

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
                                <Slider slides={clients} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
