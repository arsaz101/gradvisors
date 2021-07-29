import React from 'react'
import { InfoCard as Card } from 'components/Card/Card'
import './Team.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    animationDuration?: string
    image1?: string
    heading1?: string
    desc1?: string
    image2?: string
    heading2?: string
    desc2?: string
    image3?: string
    heading3?: string
    desc3?: string
}

const Team = ({
    animationClass,
    objectAnimationClass,
    animationDuration,
    image1,
    heading1,
    desc1,
    image2,
    heading2,
    desc2,
    image3,
    heading3,
    desc3,
}: Props) => {
    const objectDuration = (Number(animationDuration) / 2).toString()
    const customBackground = 'team__card-bg'
    const customImageClass = 'team__card-image'
    const customBtnClass = 'team__btn'
    return (
        <div className="team__section">
            <div className="team__wrapper">
                <div className="stage">Engineers you can hire.</div>
                <h2 className="team__heading" data-aos={animationClass}>
                    Meet our Team Members
                </h2>
                <div className="team__container">
                    <div className="team__container-row">
                        <div
                            className="team__container-col"
                            data-aos={animationClass}
                            data-aos-duration={animationDuration}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                data-aos-duration={objectDuration}
                                image={image1}
                                heading={heading1}
                                desc={desc1}
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
                                buttonText="Get Started"
                                buttonClass={customBtnClass}
                            />
                        </div>
                        <div
                            className="team__container-col"
                            data-aos={animationClass}
                            data-aos-duration={animationDuration}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                data-aos-duration={objectDuration}
                                image={image2}
                                heading={heading2}
                                desc={desc2}
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
                                buttonText="Get Started"
                                buttonClass={customBtnClass}
                            />
                        </div>
                        <div
                            className="team__container-col"
                            data-aos={animationClass}
                            data-aos-duration={animationDuration}
                        >
                            <Card
                                animationClass={objectAnimationClass}
                                data-aos-duration={objectDuration}
                                image={image3}
                                heading={heading3}
                                desc={desc3}
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
                                buttonText="Get Started"
                                buttonClass={customBtnClass}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
