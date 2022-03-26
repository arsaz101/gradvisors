import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { dehazeIcon, closeIcon } from 'constants/Icons'
import { Button } from 'components/Button/Button'
import logo from 'images/logo.svg'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>
        window.innerWidth <= 960 ? setButton(false) : setButton(true)

    useEffect(() => {
        showButton()
    }, [])

    useEffect(() => {
        if (click) {
            window.document.body.classList.add('scrollNone')
        } else {
            window.document.body.classList.remove('scrollNone')
        }
    }, [click])

    window.addEventListener('resize', showButton)

    return (
        <div className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="logo" />
                </Link>
                <div
                    role="presentation"
                    className="menu-icon"
                    onClick={handleClick}
                >
                    {click ? closeIcon() : dehazeIcon()}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <span className="navOverlay">
                            <HashLink
                                smooth
                                to="#about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                            </HashLink>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="navOverlay">
                            <HashLink
                                smooth
                                to="#services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </HashLink>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="navOverlay">
                            <HashLink
                                smooth
                                to="#testimonials"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Testimonials
                            </HashLink>
                        </span>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link
                                to={{
                                    pathname:
                                        'https://studyabroad.gvisors.com/informationform',
                                }}
                                target="_blank"
                                className="btn-link"
                            >
                                <Button
                                    buttonStyle="btn--outline"
                                    buttonColor="secondary-gradient"
                                    buttonSize="btn--medium"
                                >
                                    Get in Touch
                                </Button>
                            </Link>
                        ) : (
                            <Link
                                to={{
                                    pathname:
                                        'https://studyabroad.gvisors.com/informationform',
                                }}
                                target="_blank"
                                className="btn-link"
                                onClick={closeMobileMenu}
                            >
                                <Button
                                    buttonStyle="btn--outline"
                                    buttonSize="btn--mobile"
                                >
                                    Get in Touch
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
