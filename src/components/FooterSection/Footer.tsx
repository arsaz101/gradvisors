import React from 'react'
import {
    twitterIcon,
    facebookIcon,
    linkedInIcon,
    instagramIcon,
} from 'constants/Icons'
import './Footer.css'
import { Link } from 'react-router-dom'

type Props = {
    animationClass?: string
    animationDelay?: string
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
}

const Footer = ({
    animationClass,
    animationDelay,
    about,
    quickLinks,
}: Props) => {
    return (
        <div className="footer__section dark" data-aos={animationClass}>
            <div className="footer__container-wrapper">
                <div className="footer__container">
                    {about && (
                        <div
                            className="footer__about-us"
                            data-aos={animationClass}
                        >
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
                    <div className="footer__links">
                        {quickLinks && (
                            <div
                                className="sec footer__quick-links"
                                data-aos={animationClass}
                                data-aos-delay={animationDelay}
                            >
                                <h4>Quick Links</h4>
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
                        {quickLinks && (
                            <div
                                className="sec footer__quick-links"
                                data-aos={animationClass}
                                data-aos-delay={animationDelay}
                            >
                                <h4>Quick Links</h4>
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
                        {quickLinks && (
                            <div
                                className="sec footer__quick-links"
                                data-aos={animationClass}
                                data-aos-delay={animationDelay}
                            >
                                <h4>Quick Links</h4>
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
                        {quickLinks && (
                            <div
                                className="sec footer__quick-links"
                                data-aos={animationClass}
                                data-aos-delay={animationDelay}
                            >
                                <h4>Quick Links</h4>
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
                        {quickLinks && (
                            <div
                                className="sec footer__quick-links"
                                data-aos={animationClass}
                                data-aos-delay={animationDelay}
                            >
                                <h4>Quick Links</h4>
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
                    </div>
                </div>
            </div>
            <div className="footer__copyright primary-gradient">
                <p>Copyright © 2021 Algotrix. All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
