import React from 'react'
import {
    twitterIcon,
    facebookIcon,
    linkedInIcon,
    instagramIcon,
    mediumIcon,
} from 'constants/Icons'
import './Footer.css'
import { Link } from 'react-router-dom'
import logoGradvisor from 'images/footerLogo.svg'

type Props = {
    animationClass?: string
    animationDelay?: string
    about?: {
        twitter?: string
        facebook?: string
        linkedin?: string
        instagram?: string
        medium?: string
    }
    quickLinks?: {
        link: string
        name: string
    }[][]
}

const Footer = ({
    animationClass,
    animationDelay,
    about,
    quickLinks,
}: Props) => {
    return (
        <div className="footer__section dark">
            <div className="footer__container-wrapper">
                <div className="footer__container">
                    <img src={logoGradvisor} alt="" />
                    {about && (
                        <div
                            className="footer__about-us"
                            data-aos={animationClass}
                        >
                            <ul className="sci">
                                {about?.twitter && (
                                    <li>
                                        <Link
                                            to={{
                                                pathname: about?.twitter,
                                            }}
                                            target="_blank"
                                        >
                                            {twitterIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.facebook && (
                                    <li>
                                        <Link
                                            to={{
                                                pathname: about?.facebook,
                                            }}
                                            target="_blank"
                                        >
                                            {facebookIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.linkedin && (
                                    <li>
                                        <Link
                                            to={{
                                                pathname: about?.linkedin,
                                            }}
                                            target="_blank"
                                        >
                                            {linkedInIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.instagram && (
                                    <li>
                                        <Link
                                            to={{
                                                pathname: about?.instagram,
                                            }}
                                            target="_blank"
                                        >
                                            {instagramIcon()}
                                        </Link>
                                    </li>
                                )}
                                {about?.medium && (
                                    <li>
                                        <Link
                                            to={{
                                                pathname: about?.medium,
                                            }}
                                            target="_blank"
                                        >
                                            {mediumIcon('medium-icon')}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    <div className="footer__links">
                        {quickLinks &&
                            quickLinks.map((links) => (
                                <div
                                    className="sec footer__quick-links"
                                    data-aos={animationClass}
                                    data-aos-delay={animationDelay}
                                >
                                    <ul>
                                        {links.map((linkElem, index) =>
                                            !index ? (
                                                <h4>{linkElem.name}</h4>
                                            ) : (
                                                <li>
                                                    <Link
                                                        to={{
                                                            pathname:
                                                                linkElem.link,
                                                        }}
                                                        target="_blank"
                                                    >
                                                        {linkElem.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="footer__copyright primary-gradient">
                <p>©️ 2021 Gradvisors Pvt. ltd | Site by Algotrix</p>
            </div>
        </div>
    )
}

export default Footer
