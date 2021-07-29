import React from 'react'
import './Clients.css'
import test1 from 'images/testimonial-heading-1.png'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    delay?: string
    logos?: string[]
}

const Clients = ({
    animationClass,
    objectAnimationClass,
    delay,
    logos,
}: Props) => {
    return (
        <div className="clients__section" data-aos={animationClass}>
            <div className="clients__wrapper">
                <div className="stage">People we work with.</div>
                <div className="clients__heading">
                    <h1 className="clients__top-line">Our Clients</h1>
                </div>
                <div className="clients__panel">
                    <div className="clients__container">
                        {logos && (
                            <div className="clients__container-row">
                                {Object.keys(logos).map((index) => (
                                    <div
                                        className="clients__container-col"
                                        data-aos={objectAnimationClass}
                                        data-aos-delay={`${
                                            Number(index) % 2 === 0
                                                ? delay
                                                : '0'
                                        }`}
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
                    <div className="clients__container">
                        <div
                            data-aos={objectAnimationClass}
                            data-aos-delay={delay}
                        >
                            <img src={test1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
