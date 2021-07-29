import React from 'react'

import CloseIcon from '@material-ui/icons/Close'
import DehazeIcon from '@material-ui/icons/Dehaze'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter'
import Diploma from 'images/diploma.svg'
import Blob from 'images/blob.svg'
import BlobShadow from 'images/blob-shadow.svg'

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
    <RoomOutlinedIcon className={styleClass} />
)

export const permPhoneMsgOutlinedIcon = (styleClass?: string) => (
    <PermPhoneMsgOutlinedIcon className={styleClass} />
)

export const emailOutlinedIcon = (styleClass?: string) => (
    <EmailOutlinedIcon className={styleClass} />
)

export const checkOutlinedIcon = (styleClass?: string) => (
    <CheckOutlinedIcon className={styleClass} />
)

export const verticalAlignCenterIcon = (styleClass?: string) => (
    <VerticalAlignCenterIcon className={styleClass} />
)

export const diplomaVector = (styleClass?: string) => (
    <img src={Diploma} alt="" className={styleClass} />
)

export const blobCharacter = (styleClass?: string) => (
    <img src={Blob} alt="" className={styleClass} />
)

export const blobShadow = (styleClass?: string) => (
    <img src={BlobShadow} alt="" className={styleClass} />
)
