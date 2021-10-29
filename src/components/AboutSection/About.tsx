import { InfoCard as Card } from 'components/Card/Card'
import { circleIcon } from 'constants/Icons'
import React from 'react'
import './About.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    animationDuration?: string
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
        <div className="about__section">
            <div className="about__wrapper aboutBg static-height">
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
            <div className="about__section aboutBg2 static-height">
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
                                        className="about__heading transparent-fill secondary-gradient"
                                        data-aos={animationClass}
                                    >
                                        You&apos;ll do this process once,
                                        we&apos;ve done it a thousand times
                                    </h2>
                                    <div className="about__card card card-container">
                                        <span className="heading">
                                            We assist you with:
                                        </span>
                                        <div className="about__bullets">
                                            <div className="bullets">
                                                <ul>
                                                    <li>
                                                        {circleIcon()} Career &
                                                        educational counselling
                                                    </li>
                                                    <li>
                                                        {circleIcon()}{' '}
                                                        University application
                                                        processing
                                                    </li>
                                                    <li>
                                                        {circleIcon()}Essays &
                                                        personal statements
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bullets">
                                                <ul>
                                                    <li>
                                                        {circleIcon()} Drafting
                                                        CVs & resumes
                                                    </li>
                                                    <li>
                                                        {circleIcon()}Letter of
                                                        recommendations
                                                    </li>
                                                    <li>
                                                        {circleIcon()} Interview
                                                        preparation
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bullets">
                                                <ul>
                                                    <li>
                                                        {circleIcon()} Visa
                                                        application processing
                                                    </li>
                                                    <li>
                                                        {circleIcon()}Developing
                                                        linkages through alumni
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about__container-col-extended" />
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
