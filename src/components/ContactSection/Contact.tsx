import {
    emailOutlinedIcon,
    permPhoneMsgOutlinedIcon,
    roomOutlinedIcon,
} from 'constants/Icons'
import React from 'react'
import './Contact.css'
import contactImg from 'images/contact-img.svg'

type Props = {
    animationClass?: string
    animationDelay?: string
}

const Contact = ({ animationClass, animationDelay }: Props) => {
    return (
        <div className="contact__section pattern">
            <div className="contact__container container-sec">
                {/* <div className="contact__top-info">
                    <div className="top-line secondary-gradient" />
                    <div className="stage">Get in touch</div>
                </div> */}

                <div className="contact__card">
                    <div
                        className="contact__row card-detail"
                        data-aos={animationClass}
                        data-aos-delay={animationDelay}
                    >
                        <div className="card-info">
                            <div className="contact__top-info">
                                <div className="top-line secondary-gradient" />
                                <div className="stage">Get in touch</div>
                            </div>
                            <h1>Have Questions?</h1>
                            <p>
                                Feel free to reach out to our exceptional team
                                of experts and discuss your future goals.
                            </p>
                            <div
                                className="contact__row contact-detail"
                                data-aos={animationClass}
                                data-aos-delay={animationDelay}
                            >
                                <div className="contact__email">
                                    {emailOutlinedIcon()}
                                    <span>hello@gvisors.com</span>
                                </div>
                                <div className="contact__location">
                                    {roomOutlinedIcon()}
                                    <span>
                                        254/1, Sector G, Phase 5, DHA, Lahore.
                                    </span>
                                </div>
                                <div className="contact__phone">
                                    {permPhoneMsgOutlinedIcon()}
                                    <span>+92 (323) 421 9888</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-detail-image">
                            <img alt="" src={contactImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
