import {FC} from 'react'
import { Card, CardActionArea, CardActions, CardContent, Grid, Typography, Button, Link } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

// TODO: agregar el alt en todas las imagenes usadas

interface ContactDirectProps {
    contact1Name: string;
    contact1Phone: string;
    contact1Email: string;
    textBtnContact: string;
}

export const ContactDirect: FC<ContactDirectProps> = ({
    contact1Name,
    contact1Phone,
    contact1Email,
    textBtnContact,
}) => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{ width: {xs: '500px', md: '400px', lg: '450px'}, backgroundColor: 'primary.dark', pb: 2 }}>
                <CardActionArea sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <PhoneInTalkIcon sx={{fontSize: {xs: '130px', sm: '150px', md: '180px'}}} />
                    <CardContent>
                        <Typography 
                            gutterBottom 
                            component="div" 
                            sx={{
                                fontSize: {xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem', xl: '1.6rem'}, 
                                textAlign: 'center', 
                                mb:2
                            }}
                        >
                            {contact1Name}
                        </Typography>
                        <Link href={`tel:${contact1Phone}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'}, 
                                    textAlign: 'center', 
                                    mb:2
                                }}
                            >
                                +{contact1Phone}
                            </Typography>
                        </Link>
                        <Link href={`mailto:${contact1Email}`} underline="always" sx={{textDecorationColor:'#90a4ae'}}>
                            <Typography 
                                color="text.secondary" 
                                sx={{
                                    fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'}, 
                                    textAlign: 'center'
                                }}
                            >
                                {contact1Email}
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
                        {textBtnContact}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  )
}
