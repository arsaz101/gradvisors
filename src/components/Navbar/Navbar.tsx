import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="navOverlay">
                            <Link
                                to="/services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="navOverlay">
                            <Link
                                to="/products"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Testimonials
                            </Link>
                        </span>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link
                                to={{
                                    pathname:
                                        'https://studyabroad.gvisors.com/website',
                                }}
                                target="_blank"
                                className="btn-link"
                            >
                                <Button
                                    buttonStyle="btn--outline"
                                    buttonColor="secondary-gradient"
                                    buttonSize="btn--medium"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        ) : (
                            <Link
                                to="/"
                                className="btn-link"
                                onClick={closeMobileMenu}
                            >
                                <Button
                                    buttonStyle="btn--outline"
                                    buttonSize="btn--mobile"
                                >
                                    Sign Up
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
