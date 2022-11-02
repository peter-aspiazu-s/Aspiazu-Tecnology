import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';

import BannerSlideHomeImgxs from '../../public/images/banner-slide-home-img2-xs.webp'
import BannerSlideHomeImgsm from '../../public/images/banner-slide-home-img2-sm.webp'
import BannerSlideHomeImgmd from '../../public/images/banner-slide-home-img2-md.webp'
import BannerSlideHomeImglg from '../../public/images/banner-slide-home-img2-lg.webp'
import BannerSlideHomeImgxl from '../../public/images/banner-slide-home-img2-xl.webp'

export const GroupTwoImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            <Image src={BannerSlideHomeImgxs} />
        </Box>
        <Box sx={{display: {xs: 'none', sm: 'block', md:'none'}}}>
            <Image src={BannerSlideHomeImgsm} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block', lg:'none'}}}>
            <Image src={BannerSlideHomeImgmd} />
        </Box>
        <Box sx={{display: {xs: 'none', lg: 'block', xl:'none'}}}>
            <Image src={BannerSlideHomeImglg} />
        </Box>
        <Box sx={{display: {xs: 'none', xl: 'block'}}}>
            <Image src={BannerSlideHomeImgxl} />
        </Box>
    </>
  )
}
