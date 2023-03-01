import {FC} from 'react'
import Image from 'next/image';
import NextLink from 'next/link';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


interface SectionAboutProps {
    aboutTitle: string;
    aboutSemiDescription: string;
    aboutVisitBTN:string;
    aboutLinkBtn: string;
}

export const SectionAbout: FC<SectionAboutProps> = ({
    aboutTitle,
    aboutSemiDescription,
    aboutVisitBTN,
    aboutLinkBtn,
}) => {

    const backgroundImage = '/images/banner-about-section.webp';

  return (
    <Grid container>
        <Grid item xs={12}>

            <Box 
                sx={{
                    display: {xs: 'block', md: 'none'},
                    background: `url('${backgroundImage}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    width: '100%',
                    height: '400px'
                }}
            >
            </Box>
            
            <Box 
                sx={{
                    display: {xs: 'none', md: 'block'},
                    background: `url('${backgroundImage}')`,
                    // backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    WebkitBackgroundSize: 'cover',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    width: '100%',
                    height: '500px'
                }}
            >
            </Box>
            
            
            <Box
                sx={{
                    position: 'absolute',
                    top: '0px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: {xs: 'center', md: 'start'},
                    height: {xs: '100%', sm:'100%'},
                    width: {xs: '100%', md: '50%'},
                    p: {xs: 1, sm: 10}
                }}
            >
                <Typography 
                    sx={{
                        fontSize: {xs: '1.4rem', sm: '1.5rem', md: '1.7rem', lg: '1.8rem', xl: '1.9rem'}, 
                        mb: {xs: 1, sm: 3, md: 3, lg: 4}
                    }} component="h3">{aboutTitle}</Typography>
                <Typography 
                    sx={{
                        fontSize: {xs: '0.9rem', md: '1rem'}, 
                        mb: {xs: 2, sm: 3, md: 3, lg: 4}, 
                        textAlign:{xs:'center', md:'left'}
                    }} component="p">{aboutSemiDescription}</Typography>
                <NextLink href={aboutLinkBtn} passHref>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        size={'large'} 
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}>{aboutVisitBTN}</Button>
                </NextLink>
            </Box>
        </Grid>
    </Grid>
  )
}
