import { InfoCard as Card } from 'components/Card/Card'
import React from 'react'
import './About.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
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
    return (
        <div className="about__section">
            <div className="about__wrapper">
                <h1 className="about__heading" data-aos={animationClass}>
                    Build your team with just a few clicks.
                </h1>
                <div className="about__container">
                    <div className="about__container-row">
                        <div
                            className="about__container-col"
                            data-aos={animationClass}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                image={image1}
                                heading={heading1}
                                desc={desc1}
                            />
                        </div>
                        <div
                            className="about__container-col"
                            data-aos={animationClass}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                image={image2}
                                heading={heading2}
                                desc={desc2}
                            />
                        </div>
                        <div
                            className="about__container-col"
                            data-aos={animationClass}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                image={image3}
                                heading={heading3}
                                desc={desc3}
                            />
                        </div>
                    </div>
                    <div
                        className="about__container-row"
                        data-aos={animationClass}
                    >
                        <Card
                            animationClass={objectAnimationClass}
                            image={image4}
                            heading={heading4}
                            desc={desc4}
                            backgroundColor="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
