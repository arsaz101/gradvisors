import { InfoCard as Card } from 'components/Card/Card'
import { circleIcon } from 'constants/Icons'
import React from 'react'
import './About.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    animationDuration?: string
    delay?: string
    image1?: string
    image2?: string
    image3?: string
    heading1?: string
    heading2?: string
    heading3?: string
    desc1?: string
    desc2?: string
    desc3?: string
}

const About = ({
    animationClass,
    objectAnimationClass,
    animationDuration,
    delay,
    image1,
    image2,
    image3,
    heading1,
    heading2,
    heading3,
    desc1,
    desc2,
    desc3,
}: Props) => {
    const objectDuration = (Number(animationDuration) / 2).toString()
    return (
        <div className="about__section container-sec" id="about">
            <div className="about__wrapper aboutBg">
                <div className="about__content-section">
                    <div className="top-line secondary-gradient" />
                    <div className="stage">Transparent. Diligent. Agile.</div>
                    <h2 className="about__heading" data-aos={animationClass}>
                        Enrolling in your dream institution is 3 steps away
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
            </div>
            <div
                className="about__section aboutBg2 static-height"
                id="services"
            >
                <div className="about__detail">
                    <div className="about__wrapper">
                        <div className="about__container about__sec2">
                            <div className="about__container-row no-wrap">
                                <div className="about__container-col-extended">
                                    <div
                                        className="about__card card card-container flex-1"
                                        data-aos={animationClass}
                                        data-aos-duration={animationDuration}
                                        data-aos-delay={delay}
                                    >
                                        <div className="heading-bg">
                                            <h2
                                                className="about__heading"
                                                data-aos={animationClass}
                                                data-aos-duration={
                                                    animationDuration
                                                }
                                            >
                                                You&apos;ll do this process
                                                once,
                                                <br />
                                                we&apos;ve done it a thousand
                                                times.
                                            </h2>
                                        </div>
                                        <div className="spacer" />
                                        <span className="heading">
                                            We assist you with:
                                        </span>
                                        <div className="about__bullets">
                                            <div className="bullets">
                                                <ol>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            01
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Career & Educational
                                                            Counselling
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            02
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            University
                                                            Application
                                                            Processing
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            03
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Curating Essays &
                                                            Personal Statements
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            04
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Drafting CVs &
                                                            Resumes
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            05
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Assistance with
                                                            Letter of
                                                            Recommendations
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            06
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Scholarship
                                                            Applications
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            07
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Interview
                                                            Preparation
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            08
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Visa Application
                                                            Processing
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="primary-color poppinsMedium">
                                                            09
                                                        </span>
                                                        <div className="inside-line primary" />
                                                        <div className="bullet-text">
                                                            Developing
                                                            professional
                                                            linkages through our
                                                            Alumni Network
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__container-col-extended flex-2" />
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
            </div>
        </div>
    )
}

export default About
