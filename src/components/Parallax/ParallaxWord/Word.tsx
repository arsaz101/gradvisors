import React from 'react'
import Letter from './Letter'
import './Word.scss'

// type Props = {
//     word: string[][]
// }

const Word = () => {
    const P1 = [
        <svg viewBox="0 0 134 281">
            <rect className="fill-1" y="22" width="67" height="204" />
        </svg>,
        <svg viewBox="0 0 134 281">
            <ellipse className="fill-2" cx="67" cy="89" rx="67" ry="67" />
        </svg>,
        <svg viewBox="0 0 134 281">
            <circle className="fill-1" cx="67" cy="89" r="25" />
        </svg>,
    ]

    const A2 = [
        <svg viewBox="0 0 167 281" version="1.1">
            <polygon className="fill-4" points="0,226 83.5,0.1 167,226 " />
        </svg>,
        <svg viewBox="0 0 167 281" version="1.1">
            <path
                className="fill-1"
                d="M112.8,211.8v29.5c0,16.3-13.2,29.5-29.5,29.5s-29.5-13.2-29.5-29.5v-29.5 c0-16.3,13.2-29.5,29.5-29.5S112.8,195.5,112.8,211.8z"
            />
        </svg>,
    ]

    const R3 = [
        <svg viewBox="0 0 135 281" version="1.1">
            <path
                className="fill-2"
                d="M67,22H0v134h67c37,0,67-30,67-67S104,22,67,22z"
            />
        </svg>,
        <svg viewBox="0 0 135 281" version="1.1">
            <polygon className="fill-6" points="55,226 55,92 135,226 " />
        </svg>,
        <svg viewBox="0 0 135 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204" />
        </svg>,
    ]

    const A4 = [
        <svg viewBox="0 0 167 281" version="1.1">
            <polygon className="fill-5" points="0,226 83.5,0.1 167,226 " />
        </svg>,
        <svg viewBox="0 0 167 281" version="1.1">
            <path
                className="fill-1"
                d="M112.8,211.8v29.5c0,16.3-13.2,29.5-29.5,29.5s-29.5-13.2-29.5-29.5v-29.5 c0-16.3,13.2-29.5,29.5-29.5S112.8,195.5,112.8,211.8z"
            />
        </svg>,
    ]

    const L5 = [
        <svg viewBox="0 0 110 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204" />
        </svg>,
        <svg viewBox="0 0 110 281" version="1.1">
            <path
                className="fill-4"
                d="M0,226c0,30.4,24.6,55,55,55s55-24.6,55-55H0z"
            />
        </svg>,
    ]

    const L6 = [
        <svg viewBox="0 0 110 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204" />
        </svg>,
        <svg viewBox="0 0 110 281" version="1.1">
            <path
                className="fill-2"
                d="M0,226c0,30.4,24.6,55,55,55s55-24.6,55-55H0z"
            />
        </svg>,
    ]

    const A7 = [
        <svg viewBox="0 0 167 281" version="1.1">
            <polygon className="fill-3" points="0,226 83.5,0.1 167,226 " />
        </svg>,
        <svg viewBox="0 0 167 281" version="1.1">
            <path
                className="fill-1"
                d="M112.8,211.8v29.5c0,16.3-13.2,29.5-29.5,29.5s-29.5-13.2-29.5-29.5v-29.5 c0-16.3,13.2-29.5,29.5-29.5S112.8,195.5,112.8,211.8z"
            />
        </svg>,
    ]

    const X8 = [
        <svg viewBox="0 0 204 281" version="1.1">
            <polygon
                className="fill-2"
                points="0.2,192 34.1,226 203.5,56 169.6,22 "
            />
        </svg>,
        <svg viewBox="0 0 204 281" version="1.1">
            <polygon
                className="fill-1"
                points="0.2,56 34.1,22 203.5,192 169.6,226 "
            />
        </svg>,
    ]

    const words = [P1, A2, R3, A4, L5, L6, A7, X8]

    return (
        <div className="word">
            {words.map((X, i) => (
                <Letter key={Number(i)} letter={X} />
            ))}
        </div>
    )
}

export default Word
