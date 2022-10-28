import type { NextPage } from 'next'
import { Typography, Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
import { AboutHeader, AboutMisionVision, AboutPersonal } from '../../components/aboutPage'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - About'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Box sx={{mt: {xs: 5, sm: 7, md: 8}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'¿Sobre Nosotros?'}
          aboutSemiDescription={'Apiazu Technology es una empresa dedicada a la creación de aplicaciónes web, usando tecnologías de confianza basadas en JavaScript'}
          aboutVisitBTN={'Contactar'}
        />
      </Box>
      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Misión'}
          descriptionMision={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, soluta? Nam amet dolor id, nisi quas provident incidunt fugit rem rerum soluta. Deleniti aperiam sit nam voluptatum cupiditate minus id.'}
          titleVision={'Visión'}
          descriptionVision={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, soluta? Nam amet dolor id, nisi quas provident incidunt fugit rem rerum soluta. Deleniti aperiam sit nam voluptatum cupiditate minus id.'} 
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutPersonal 
          about1Name={'Peter Aspiazu'}
          about1Position={'Desarrollador Web'}
          about1Phone={'593 967454468'}
          about1Email={'paspiazusabando@gmail.com'}
          textBtnAbout={'Contactar'}
        />
      </Container>
    </PlantillaLayoutEs>
  )
}

export default AboutPage