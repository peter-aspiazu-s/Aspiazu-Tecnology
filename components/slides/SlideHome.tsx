import {FC} from 'react'
import Image from 'next/image';
import NextLink from 'next/link';
import { Grid, Typography, Button, Box } from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react'

// Import CSS Styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Navigation} from 'swiper'

import SlideHomeWebSiteMobile from '../../public/images/slide-home-web-site.webp'
import SlideHomeWebSiteDesktop from '../../public/images/slide-home-web-site2.webp'
import SlideHomeGraphicDesignMobile from '../../public/images/slide-home-graphic-design.webp'
import SlideHomeGraphicDesignDesktop from '../../public/images/slide-home-graphic-design2.webp'
import SlideHomeEcommerceMobile from '../../public/images/slide-home-ecommerce.webp'
import SlideHomeEcommerceDesktop from '../../public/images/slide-home-ecommerce2.webp'

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
                    <Box sx={{display: {xs: 'block', md: 'none'}}}>
                        <Image src={SlideHomeWebSiteMobile} />
                    </Box>
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <Image src={SlideHomeWebSiteDesktop} />
                    </Box>
                    <Grid 
                        container 
                        sx={{
                            position:"absolute", 
                            display:"flex",
                            justifyContent:{xs:"center", md:'start'},
                            alignItems:{xs:"center", md:'start'}
                        }}>
                        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 1}, display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
                            <Typography sx={{fontSize: {xs:'24px', sm:'34px', md: '45px', lg: '60px'}}} component="h3">{titleSlide1}</Typography>
                        </Grid>
                        <Grid item md={12} sx={{mb:{md: 4, lg: 5}, display: {xs: 'none', lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
                            <Typography sx={{fontSize: {lg: '30px'}, textAlign: {lg: 'left'}}} component="p">Creamos tu sitio web con las mejores tecnologías para la web</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}>
                            <NextLink href={servicePath1}>
                                <Button variant="contained" size="large" color="secondary">
                                    <Typography sx={{fontSize: {xs: '14px', sm: '24px'}}}>{start}</Typography>
                                </Button>
                            </NextLink>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                <Box sx={{display: {xs: 'block', md: 'none'}}}>
                    <Image src={SlideHomeGraphicDesignMobile} />
                </Box>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Image src={SlideHomeGraphicDesignDesktop} />
                </Box>
                    <Grid 
                        container 
                        sx={{
                            position:"absolute", 
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 1}, display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
                            <Typography sx={{fontSize: {xs:'24px', sm:'34px', md: '45px', lg: '60px'}}} component="h3">{titleSlide2}</Typography>
                        </Grid>
                        <Grid item md={12} sx={{mb:{md: 4, lg: 5}, display: {xs: 'none', lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
                            <Typography sx={{fontSize: {lg: '30px'}, textAlign: {lg: 'left'}}} component="p">Hacemos trabajos de diseño gráfico utilizando herramientas como photoshop, ilustrator, figma, etc</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}>
                            <NextLink href={servicePath2}>
                                <Button variant="contained" size="large" color="secondary">
                                    <Typography sx={{fontSize: {xs: '14px', sm: '24px'}}}>{start}</Typography>
                                </Button>
                            </NextLink>
                        </Grid>
                    </Grid>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{display: {xs: 'block', md: 'none'}}}>
                        <Image src={SlideHomeEcommerceMobile} />
                    </Box>
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <Image src={SlideHomeEcommerceDesktop} />
                    </Box>
                    <Grid 
                        container 
                        sx={{
                            position:"absolute", 
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }}>
                        <Grid item xs={12} sx={{mb:{xs: 2, sm: 3, md: 4, lg: 1}, display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
                            <Typography sx={{fontSize: {xs:'24px', sm:'34px', md: '45px', lg: '60px'}}} component="h3">{titleSlide3}</Typography>
                        </Grid>
                        <Grid item md={12} sx={{mb:{md: 4, lg: 5}, display: {xs: 'none', lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}> 
                            <Typography sx={{fontSize: {lg: '30px'}, textAlign: {lg: 'left'}}} component="p">Desarrollamos tu Tienda en Línea que acepte pagos a nivel nacional e internacional</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{display: {lg: 'flex'}, justifyContent: {lg: 'start'}, ml: {lg:9}}}>
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
