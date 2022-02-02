import React from 'react'

import CloseIcon from '@material-ui/icons/Close'
import DehazeIcon from '@material-ui/icons/Dehaze'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import RoomOutlinedIcon from 'images/location.svg'
import PermPhoneMsgOutlinedIcon from 'images/phone.svg'
import EmailOutlinedIcon from 'images/email.svg'
import { ReactComponent as MediumIcon } from 'images/medium.svg'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter'
import CircleIcon from '@material-ui/icons/AddCircle'
import BackToTop from 'images/backToTop.svg'

export const closeIcon = (styleClass?: string) => (
    <CloseIcon className={styleClass} />
)

export const dehazeIcon = (styleClass?: string) => (
    <DehazeIcon className={styleClass} />
)

export const formatQuoteIcon = (styleClass?: string) => (
    <FormatQuoteIcon className={styleClass} />
)

export const twitterIcon = (styleClass?: string) => (
    <TwitterIcon className={styleClass} />
)

export const facebookIcon = (styleClass?: string) => (
    <FacebookIcon className={styleClass} />
)

export const linkedInIcon = (styleClass?: string) => (
    <LinkedInIcon className={styleClass} />
)

export const whatsAppIcon = (styleClass?: string) => (
    <WhatsAppIcon className={styleClass} />
)

export const instagramIcon = (styleClass?: string) => (
    <InstagramIcon className={styleClass} />
)
export const roomOutlinedIcon = (styleClass?: string) => (
    <img src={RoomOutlinedIcon} alt="" className={styleClass} />
)

export const permPhoneMsgOutlinedIcon = (styleClass?: string) => (
    <img src={PermPhoneMsgOutlinedIcon} alt="" className={styleClass} />
)

export const emailOutlinedIcon = (styleClass?: string) => (
    <img src={EmailOutlinedIcon} alt="" className={styleClass} />
)

export const checkOutlinedIcon = (styleClass?: string) => (
    <CheckOutlinedIcon className={styleClass} />
)

export const verticalAlignCenterIcon = (styleClass?: string) => (
    <VerticalAlignCenterIcon className={styleClass} />
)

export const circleIcon = (styleClass?: string) => (
    <CircleIcon className={styleClass} />
)

export const mediumIcon = (styleClass?: string) => (
    <MediumIcon className={`${styleClass} MuiSvgIcon-root`} />
)

export const backToTop = (styleClass?: string) => (
    <img src={BackToTop} alt="" className={styleClass} />
)
