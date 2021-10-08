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
        <div className="contact__section">
            <div className="contact__container">
                <div className="contact__card">
                    <div
                        className="contact__row card-detail"
                        data-aos={animationClass}
                        data-aos-delay={animationDelay}
                    >
                        <div className="card-info">
                            <div className="top-line secondary-gradient" />
                            <div className="stage">Say hello.</div>
                            <h1>Have Questions?</h1>
                            <p>
                                Feel free to reach out to us and let us know
                                your thoughts, ask questions, or share feedback
                            </p>
                        </div>
                        <div className="card-detail-image">
                            <img alt="" src={contactImg} />
                        </div>
                    </div>
                    <div
                        className="contact__row contact-detail"
                        data-aos={animationClass}
                        data-aos-delay={animationDelay}
                    >
                        <div className="contact__email">
                            {emailOutlinedIcon()}
                            <span>arsal.azam@algotrix.io</span>
                        </div>
                        <div className="contact__location">
                            {roomOutlinedIcon()}
                            <span>We are completely remote</span>
                        </div>
                        <div className="contact__phone">
                            {permPhoneMsgOutlinedIcon()}
                            <span>+12 3456789</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
