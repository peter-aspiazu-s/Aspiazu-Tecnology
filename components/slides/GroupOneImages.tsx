import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';

import BannerSlideHomeImgsm from '../../public/images/banner-slide-home-img1-sm.webp'
import BannerSlideHomeImglg from '../../public/images/banner-slide-home-img1-lg.webp'
import BannerSlideHomeImgxl from '../../public/images/banner-slide-home-img1-xl.webp'

export const GroupOneImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={BannerSlideHomeImgsm} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block', xl:'none'}}}>
            <Image src={BannerSlideHomeImglg} />
        </Box>
        <Box sx={{display: {xs: 'none', xl: 'block'}}}>
            <Image src={BannerSlideHomeImgxl} />
        </Box>
    </>
  )
}
