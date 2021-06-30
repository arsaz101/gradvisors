import React from 'react'
import './Clients.css'

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
                <div className="clients__heading">
                    <h1 className="clients__top-line">Our Clients</h1>
                </div>
                <div className="clients__container">
                    {logos && (
                        <div className="clients__container-row">
                            {Object.keys(logos).map((index) => (
                                <div
                                    className="clients__container-col"
                                    data-aos={objectAnimationClass}
                                    data-aos-delay={`${
                                        Number(index) % 2 === 0 ? delay : '0'
                                    }`}
                                >
                                    <img src={logos[Number(index)]} alt="" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Clients
