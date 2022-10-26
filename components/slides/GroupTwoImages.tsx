import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';


import SlideHomeGraphicDesignMobile from '../../public/images/slide-home-graphic-design.webp'
import SlideHomeGraphicDesignDesktop from '../../public/images/slide-home-graphic-design2.webp'

export const GroupTwoImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={SlideHomeGraphicDesignMobile} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={SlideHomeGraphicDesignDesktop} />
        </Box>
    </>
  )
}
