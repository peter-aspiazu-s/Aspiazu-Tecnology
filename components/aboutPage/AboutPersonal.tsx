import {FC} from 'react'
import { Grid, Card, CardActionArea, CardContent, Typography, Link, CardActions, Button } from '@mui/material';

import PublicIcon from '@mui/icons-material/Public';

interface AboutPersonalProps {
    about1Name: string;
    about1Position: string;
    about1Phone: string;
    about1Email: string;
    textBtnAbout: string;
}

export const AboutPersonal: FC<AboutPersonalProps> = ({
    about1Name,
    about1Position,
    about1Phone,
    about1Email,
    textBtnAbout,
}) => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{width:{xs: 300, sm: 400, md: 500}, maxWidth: 600, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <PublicIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{
                                fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                                textAlign: 'center', mb:2
                            }}
                        >
                            {about1Name}
                        </Typography>
                        <Typography 
                            color="text.secondary" 
                            sx={{
                                fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'}, 
                                textAlign: 'center', 
                                mb:2
                            }}
                        >
                            {about1Position}
                        </Typography>
                        <Link href={`tel:${about1Phone}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'}, 
                                    textAlign: 'center', 
                                    mb:2
                                }}
                            >
                                +{about1Phone}
                            </Typography>
                        </Link>
                        <Link href={`mailto:${about1Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'}, 
                                    textAlign: 'center'
                                }}
                            >
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
                        href="https://walink.co/5e72b8"
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