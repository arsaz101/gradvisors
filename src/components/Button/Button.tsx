import React from 'react'
import './Button.css'

type Props = {
    children?: any
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: any
    buttonStyle?: string
    buttonSize?: string
    buttonColor?: string
}

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
}: Props) => {
    return (
        <button
            className={`btn ${buttonStyle} ${buttonSize} ${buttonColor}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
