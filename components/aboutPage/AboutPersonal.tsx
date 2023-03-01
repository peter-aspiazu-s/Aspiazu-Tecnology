import {FC, useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';


interface AboutPersonalProps {
    about1Name: string;
    about1Position: string;
    about1Phone?: string;
    about1Email: string;
    about2Name: string;
    about2Position: string;
    about2Phone?: string;
    about2Email: string;
    textBtnAbout: string;
    aboutt1Link: string;
    aboutt2Link: string;
}

export const AboutPersonal: FC<AboutPersonalProps> = ({
    about1Name,
    about1Position,
    about1Phone,
    about1Email,
    about2Name,
    about2Position,
    about2Phone,
    about2Email,
    textBtnAbout,
    aboutt1Link,
    aboutt2Link,
}) => {

    const [scrollAnimation3, setScrollAnimation3] = useState(false);
    const [scrollAnimation4, setScrollAnimation4] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      let animation3 = document.getElementById('animationScroll3');
      let position3: any = animation3?.getBoundingClientRect().top;
      let animation4 = document.getElementById('animationScroll4');
      let position4: any = animation4?.getBoundingClientRect().top;

      let windowSize = window.innerHeight / 4; 

      if( position3 < windowSize ){
        setScrollAnimation3(true);
      }
      if( position4 < windowSize ){
        setScrollAnimation4(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            id='animationScroll3' 
            className={scrollAnimation3 ? 'animate__animated animate__pulse animate__faster' : ''} 
            display={scrollAnimation3 ? 'block' : 'none'}
        >
            <Card sx={{width:{xs: 300, sm: 400, md: 500}, maxWidth: 600, backgroundColor: 'primary.dark', py: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <CardMedia
                        component="img"
                        sx={{width:{xs: 250, sm:350, lg:400}}}
                        image="/images/peter-aspiazu.jpg"
                        alt="Antonio Caguana"
                    />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {about1Name}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                            textAlign: 'center', 
                            mb:2}}>
                            {about1Position}
                        </Typography>
                        <Link href={`tel:+593967454468`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.9rem', md: '1rem'}, 
                                    textAlign: 'center', 
                                    mb:2}}>
                                +(593) 6745-4468
                            </Typography>
                        </Link>
                        <Link href={`mailto:${about1Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{fontSize: {xs: '0.9rem', md: '1rem'}, 
                                textAlign: 'center'}}>
                                {about1Email}
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        href={aboutt1Link}
                        target="_blank"
                        sx={{fontSize: {xs: '0.8rem', xl: '1rem'}}}
                    >
                        {textBtnAbout}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}