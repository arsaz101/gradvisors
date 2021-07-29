import React from 'react'
import './CircularBG.css'

type Props = {
    element: JSX.Element
}

const CircularBG = ({ element }: Props) => {
    return (
        <div className="circularbg">
            <div className="circularbg__container">
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                <div className="ring" />
                {element}
            </div>
        </div>
    )
}

export default CircularBG
