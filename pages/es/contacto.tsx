import type { NextPage } from 'next'
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { PlantillaLayoutEs } from '../../components/layout'
import { ContactDirect, ContactForm, ContactHeader } from '../../components/contactPage';
import { FormFooter } from '../../components/footer/FormFooter';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - Contact'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Box sx={{mt: {xs: 5, sm: 7, md: 8}, height: 'auto', position: 'relative'}}>
        <ContactHeader 
          contactTitle={'Contáctanos'}
          contactSemiDescription={'Ponte en contacto con un experto'}
          contactVisitBTN={'Contactar'}
        />
      </Box>
      <Container sx={{py:5}}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography sx={{fontSize: {xs:'25px', sm:'40px', md:'50px'}, color: 'text.disabled', textAlign: 'center', mb: 3}}>Formulario de Contacto</Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{mb:{xs: 5, md: 0}}}>
            <ContactForm 
                labelName={'Nombre'}
                labelEmail={'Correo'}
                labelComment={'Mensaje'}
                btnSubmit={'Enviar'}
                warningMessage={'Su mensaje se envió con éxito'}
                nameErrorMessage={'El nombre es requerido'}
                emailErrorMessage={'El correo es incorrecto'}
                messageErrorMessage={'El mensaje es requerido y debe tener 10 o más letras'}
                warningMessageInput={'Ingrese un valor'}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactDirect 
              contact1Name={'Peter Aspiazu'}
              contact1Phone={'593 967454468'}
              contact1Email={'paspiazusabando@gmail.com'}
              textBtnContact={'Contactar'}
            />
          </Grid>
        </Grid>  
      </Container>
      <Container sx={{py: 3, display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <IconButton color="secondary" href="https://www.facebook.com/profile.php?id=100083073915723" target="_blank">
          <FacebookIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
        <IconButton color="secondary" href="https://instagram.com/paspiazus?igshid=YmMyMTA2M2Y=" target="_blank">
          <InstagramIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
        <IconButton color="secondary" href="https://twitter.com/AspiazuPeter" target="_blank">
          <TwitterIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
        <IconButton color="secondary">
          <YouTubeIcon sx={{fontSize: {xs:'40px', sm:'60px'}}} />
        </IconButton>
      </Container>
    </PlantillaLayoutEs>
  )
}

export default ContactPage