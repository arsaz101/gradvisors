import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { dehazeIcon, closeIcon } from 'constants/Icons'
import { Button } from 'components/Button/Button'

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
                    Gradvisors
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
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/services"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Clients
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/products"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to="/" className="btn-link">
                                <Button
                                    buttonStyle="btn--outline"
                                    buttonColor="primary-btn"
                                    buttonSize="btn--medium"
                                >
                                    Hire
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
                                    Hire
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
