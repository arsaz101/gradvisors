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
    image4?: string
    heading4?: string
    desc4?: string
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
    image4,
    heading4,
    desc4,
}: Props) => {
    const objectDuration = (Number(animationDuration) / 2).toString()
    const customBackground = 'team__card-bg'
    const customImageClass = 'team__card-image'
    return (
        <div className="team__section team-bg container-sec">
            <div className="team__wrapper">
                <div className="top-line secondary-gradient" />
                <div className="stage">Brains behind the operation</div>
                <h2 className="team__heading" data-aos={animationClass}>
                    Meet our Team
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
                                cardHeadingClass="team-card-name"
                                containerClass="team__card-container-bg"
                                desc={desc1}
                                descClass="team-desc"
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
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
                                cardHeadingClass="team-card-name"
                                containerClass="team__card-container-bg"
                                desc={desc2}
                                descClass="team-desc"
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
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
                                cardHeadingClass="team-card-name"
                                containerClass="team__card-container-bg"
                                desc={desc3}
                                descClass="team-desc"
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
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
                                image={image4}
                                heading={heading4}
                                cardHeadingClass="team-card-name"
                                containerClass="team__card-container-bg"
                                desc={desc4}
                                descClass="team-desc"
                                backgroundColor={customBackground}
                                imageClass={customImageClass}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
