import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';


import SlideHomeWebSiteMobile from '../../public/images/slide-home-web-site.webp'
import SlideHomeWebSiteDesktop from '../../public/images/slide-home-web-site2.webp'

export const GroupOneImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={SlideHomeWebSiteMobile} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={SlideHomeWebSiteDesktop} />
        </Box>
    </>
  )
}
