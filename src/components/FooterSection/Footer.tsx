import React from 'react'
import {
    twitterIcon,
    facebookIcon,
    linkedInIcon,
    whatsAppIcon,
    instagramIcon,
    roomIcon,
    phoneIcon,
    emailIcon,
} from 'constants/Icons'
import './Footer.css'
import { Link } from 'react-router-dom'

type Props = {
    animationClass?: string
    about?: {
        desc?: string
        twitter?: string
        facebook?: string
        linkedin?: string
        instagram?: string
    }
    quickLinks?: {
        link: string
        name: string
    }[]
    contactInfo?: {
        address?: string
        phone?: string
        email?: string
    }
}

const Footer = ({ animationClass, about, quickLinks, contactInfo }: Props) => {
    return (
        <div className="footer__section" data-aos={animationClass}>
            <div className="footer__container-wrapper">
                <div className="footer__container">
                    {about && (
                        <div
                            className="sec footer__about-us"
                            data-aos={animationClass}
                        >
                            <h2>About Us</h2>
                            <p>{about?.desc}</p>
                            <ul className="sci">
                                {about?.twitter && (
                                    <li>
                                        <Link to={about?.twitter}>
                                            {twitterIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.facebook && (
                                    <li>
                                        <Link to={about?.facebook}>
                                            {facebookIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.linkedin && (
                                    <li>
                                        <Link to={about?.linkedin}>
                                            {linkedInIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.instagram && (
                                    <li>
                                        <Link to={about?.instagram}>
                                            {instagramIcon()}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    {quickLinks && (
                        <div
                            className="sec footer__quick-links"
                            data-aos={animationClass}
                        >
                            <h2>Quick Links</h2>
                            <ul>
                                {Object.keys(quickLinks).map(
                                    (index) =>
                                        quickLinks[Number(index)] && (
                                            <li>
                                                <Link
                                                    to={
                                                        quickLinks[
                                                            Number(index)
                                                        ]?.link
                                                    }
                                                >
                                                    {
                                                        quickLinks[
                                                            Number(index)
                                                        ]?.name
                                                    }
                                                </Link>
                                            </li>
                                        )
                                )}
                            </ul>
                        </div>
                    )}
                    {contactInfo && (
                        <div
                            className="sec footer__contact"
                            data-aos={animationClass}
                        >
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span>{roomIcon()}</span>
                                    <span>{contactInfo?.address}</span>
                                </li>
                                <li>
                                    <span>{phoneIcon()}</span>
                                    <p>
                                        <Link to={`tel:${contactInfo?.phone}`}>
                                            {contactInfo?.phone}
                                        </Link>
                                    </p>
                                </li>
                                <li>
                                    <span>{emailIcon()}</span>
                                    <p>
                                        <Link
                                            to={`mailto:${contactInfo?.email}`}
                                        >
                                            {contactInfo?.email}
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className="footer__copyright">
                <p>Copyright © 2021 Algotrix. All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
