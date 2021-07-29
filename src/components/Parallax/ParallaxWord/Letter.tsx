import React from 'react'
import { Parallax } from 'react-scroll-parallax'

type Props = {
    letter: JSX.Element[]
}

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const Letter = ({ letter }: Props) => {
    const offset = getRandomInt(50, 150)

    return (
        <div className="letter">
            {letter?.map((X, i) => (
                <Parallax
                    className="letter-comp"
                    key={Number(i)}
                    y={[
                        `${-offset * (Number(i) + 1)}px`,
                        `${offset * (Number(i) + 1)}px`,
                    ]}
                >
                    {X}
                </Parallax>
            ))}
        </div>
    )
}

export default Letter
