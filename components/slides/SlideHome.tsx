import {FC} from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { Grid, Typography, Button } from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react'

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Navigation} from 'swiper'

import SlideHomeWebSite from '../../public/images/slide-home-web-site.webp'
import SlideHomeGraphicDesign from '../../public/images/slide-home-graphic-design.webp'
import SlideHomeEcommerce from '../../public/images/slide-home-ecommerce.webp'

interface SliderProps {
    titleSlide1: string;
    servicePath1: string;
    titleSlide2: string;
    servicePath2: string;
    titleSlide3: string;
    servicePath3: string;
    start: string;
}


export const SlideHome: FC<SliderProps> = ({
    titleSlide1,
    servicePath1,
    titleSlide2,
    servicePath2,
    titleSlide3,
    servicePath3,
    start,
}) => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={SlideHomeWebSite} />
                    <Grid 
                        container 
                        sx={{
                            position:"absolute", 
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 5}}}> 
                            <Typography sx={{fontSize: {xs:'24px', sm:'34px', md: '45px', lg: '60px'}}} component="h3">{titleSlide1}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <NextLink href={servicePath1}>
                                <Button variant="contained" size="large" color="secondary">
                                    <Typography sx={{fontSize: {xs: '14px', sm: '24px'}}}>{start}</Typography>
                                </Button>
                            </NextLink>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SlideHomeGraphicDesign} />
                    <Grid 
                        container 
                        sx={{
                            position:"absolute", 
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 5}}}> 
                            <Typography sx={{fontSize: {xs:'24px', sm:'34px', md: '45px', lg: '60px'}}} component="h3">{titleSlide2}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <NextLink href={servicePath2}>
                                <Button variant="contained" size="large" color="secondary">
                                    <Typography sx={{fontSize: {xs: '14px', sm: '24px'}}}>{start}</Typography>
                                </Button>
                            </NextLink>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SlideHomeEcommerce} />
                    <Grid 
                        container 
                        sx={{
                            position:"absolute", 
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 5}}}> 
                            <Typography sx={{fontSize: {xs:'24px', sm:'34px', md: '45px', lg: '60px'}}} component="h3">{titleSlide3}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <NextLink href={servicePath3}>
                                <Button variant="contained" size="large" color="secondary">
                                    <Typography sx={{fontSize: {xs: '14px', sm: '24px'}}}>{start}</Typography>
                                </Button>
                            </NextLink>
                        </Grid>
                    </Grid>
                </SwiperSlide>
            </Swiper>
        </Grid>
    </Grid>
  )
}
