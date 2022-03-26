import {
    emailOutlinedIcon,
    permPhoneMsgOutlinedIcon,
    roomOutlinedIcon,
} from 'constants/Icons'
import React from 'react'
import './Contact.css'
import contactImg from 'images/contact-img.svg'
import { Link } from 'react-router-dom'

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
                    <div className="contact__row card-detail">
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
                            <div className="contact__row contact-detail">
                                <div className="contact__email">
                                    {emailOutlinedIcon()}
                                    <Link
                                        to={{
                                            pathname: 'hello@gvisors.com',
                                        }}
                                        target="_blank"
                                    >
                                        <span>hello@gvisors.com</span>
                                    </Link>
                                </div>
                                <div className="contact__location">
                                    {roomOutlinedIcon()}
                                    <Link
                                        to={{
                                            pathname:
                                                'https://www.google.com/maps/place//data=!4m2!3m1!1s0x3919093e2b762485:0x999442e5dc0736a2?source=g.page.default',
                                        }}
                                        target="_blank"
                                    >
                                        <span>
                                            254/1, Sector G, Phase 5, DHA,
                                            Lahore.
                                        </span>
                                    </Link>
                                </div>
                                <div className="contact__phone">
                                    {permPhoneMsgOutlinedIcon()}
                                    <Link
                                        to={{
                                            pathname: '+923234219888',
                                        }}
                                        target="_blank"
                                    >
                                        <span>+92 (323) 421 9888</span>
                                    </Link>
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
