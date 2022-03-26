import React, { useState } from 'react'
import { InfoCard as Card } from 'components/Card/Card'
import Slider from 'components/Slider'
import './Team.css'

type Props = {
    animationClass?: string
    objectAnimationClass?: string
    animationDuration?: string
    team: {
        image?: string
        heading?: string
        desc?: string
    }[]
}

const Team = ({
    animationClass,
    objectAnimationClass,
    animationDuration,
    team,
}: Props) => {
    const objectDuration = (Number(animationDuration) / 2).toString()
    const customBackground = 'team__card-bg'
    const customImageClass = 'team__card-image'
    // const delay = 25000

    // const [active, setActive] = useState(0)
    // const timeoutRef = React.useRef({})
    // const [mobileView, setMobileView] = useState(0)

    // const resetTimeout = () => {
    //     if (timeoutRef.current) {
    //         clearTimeout(Number(timeoutRef.current))
    //     }
    // }

    // React.useEffect(() => {
    //     resetTimeout()
    //     timeoutRef.current = setTimeout(
    //         () =>
    //             setActive((prevIndex) =>
    //                 prevIndex === team?.length - 1 ? 0 : prevIndex + 1
    //             ),
    //         delay
    //     )

    //     return () => {
    //         resetTimeout()
    //     }
    // }, [active, team?.length])

    // React.useEffect(() => {
    //     setMobileView(window.innerWidth < 961 ? 1 : 0)
    //     console.log(mobileView)
    // }, [])

    // React.useEffect(() => {
    //     setMobileView(window.innerWidth < 961 ? 1 : 0)
    //     console.log(mobileView)
    // }, [window.innerWidth])

    const teamSlides = Object.keys(team).map((index) => (
        <div
            className="team__container-col"
            data-aos={animationClass}
            data-aos-duration={animationDuration}
        >
            <Card
                {...team[Number(index)]}
                animationClass={objectAnimationClass}
                data-aos-duration={objectDuration}
                cardHeadingClass="team-card-name"
                containerClass="team__card-container-bg"
                descClass="team-desc"
                backgroundColor={customBackground}
                imageClass={customImageClass}
            />
        </div>
        // <Card
        //     {...team[Number(index)]}
        //     nameTagClass="secondary-gradient"
        //     classString={`${
        //         active === Number(index)
        //             ? ' active'
        //             : ''
        //     }`}
        // />
    ))

    console.log(teamSlides)

    return (
        <>
            {/* <Slider slides={teamSlides} slidesPerView={4} /> */}
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
                                className="team__slideshow"
                                // data-aos={objectAnimationClass}
                            >
                                <Slider slides={teamSlides} slidesPerView={4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
