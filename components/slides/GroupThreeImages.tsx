import {FC} from 'react'
import Image from 'next/image';
import { Box } from '@mui/material';

import SlideHomeEcommerceMobile from '../../public/images/slide-home-ecommerce.webp'
import SlideHomeEcommerceDesktop from '../../public/images/slide-home-ecommerce2.webp'

export const GroupThreeImages: FC = () => {
  return (
    <>
        <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={SlideHomeEcommerceMobile} />
        </Box>
        <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={SlideHomeEcommerceDesktop} />
        </Box>
    </>
  )
}
