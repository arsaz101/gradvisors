import { InfoCard as Card } from 'components/Card/Card'
import CircularBG from 'components/CircularBG/CircularBG'
import { checkOutlinedIcon, verticalAlignCenterIcon } from 'constants/Icons'
import React from 'react'
import './About.css'
import aero from 'images/aero.png'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    animationDuration?: string
    image1?: string
    image2?: string
    image3?: string
    image4?: string
    heading1?: string
    heading2?: string
    heading3?: string
    heading4?: string
    desc1?: string
    desc2?: string
    desc3?: string
    desc4?: string
}

const About = ({
    animationClass,
    objectAnimationClass,
    animationDuration,
    image1,
    image2,
    image3,
    image4,
    heading1,
    heading2,
    heading3,
    heading4,
    desc1,
    desc2,
    desc3,
    desc4,
}: Props) => {
    const objectDuration = (Number(animationDuration) / 2).toString()
    return (
        <div className="about__section">
            <div className="about__wrapper">
                <div className="stage">Click. Match. Hire</div>
                <h2 className="about__heading" data-aos={animationClass}>
                    Build your team with just a few clicks.
                </h2>
                <div className="about__container">
                    <div className="about__container-row">
                        <div
                            className="about__container-col"
                            data-aos={animationClass}
                            data-aos-duration={animationDuration}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                data-aos-duration={objectDuration}
                                image={image1}
                                heading={heading1}
                                desc={desc1}
                            />
                        </div>
                        <div
                            className="about__container-col"
                            data-aos={animationClass}
                            data-aos-duration={animationDuration}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                data-aos-duration={objectDuration}
                                image={image2}
                                heading={heading2}
                                desc={desc2}
                            />
                        </div>
                        <div
                            className="about__container-col"
                            data-aos={animationClass}
                            data-aos-duration={animationDuration}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                data-aos-duration={objectDuration}
                                image={image3}
                                heading={heading3}
                                desc={desc3}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CircularBG
                element={
                    <div className="about__detail">
                        <div className="about__wrapper">
                            <div className="about__container about__sec2">
                                <div className="about__container-row no-wrap">
                                    <div
                                        className="about__container-col-extended"
                                        data-aos={animationClass}
                                        data-aos-duration={animationDuration}
                                    >
                                        <h2
                                            className="about__heading"
                                            data-aos={animationClass}
                                        >
                                            You manage the tech. We manage
                                            everything else.
                                        </h2>
                                        <p>
                                            We find, hire and train the top tech
                                            talent in the world, so you dont
                                            have to. Your team is all set up and
                                            ready for you on day 1.
                                        </p>
                                        <div className="about__bullets">
                                            <div className="bullets">
                                                <h4>Sourcing</h4>
                                                <ul>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Recruitment
                                                    </li>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Onboarding
                                                    </li>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Reviews
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bullets">
                                                <h4>Sourcing</h4>
                                                <ul>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Recruitment
                                                    </li>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Onboarding
                                                    </li>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Reviews
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bullets">
                                                <h4>Sourcing</h4>
                                                <ul>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Recruitment
                                                    </li>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Onboarding
                                                    </li>
                                                    <li>
                                                        <span className="bullet-check">
                                                            {checkOutlinedIcon()}
                                                        </span>
                                                        Reviews
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about__container-col-extended">
                                        <img
                                            alt=""
                                            src={aero}
                                            data-aos="orbit"
                                            data-aos-duration="2000"
                                            data-aos-easing="ease-in-out"
                                            data-aos-delay="300"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="scroll-action">
                                <div className="scroll-icon">
                                    {verticalAlignCenterIcon()}
                                </div>
                                <div className="scroll-text">Scroll Down</div>
                            </div> */}
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default About
