import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { AboutHeader, AboutMisionVision, AboutPersonal } from '../components/aboutPage'

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayout title={'Plantilla 1 - About'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Box sx={{mt: {xs: 10, md: 11}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'About Us?'}
          aboutSemiDescription={'Aspiazu Technology it is a company dedicated to the creation of web applications, using reliable technologies such as NextJS, Material UI, CSS, React, Node, Mongo, Express, JWT, SQL'}
          aboutVisitBTN={'Contact'}
        />
      </Box>
      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Mision'}
          descriptionMision={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, soluta? Nam amet dolor id, nisi quas provident incidunt fugit rem rerum soluta. Deleniti aperiam sit nam voluptatum cupiditate minus id.'}
          titleVision={'Vision'}
          descriptionVision={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, soluta? Nam amet dolor id, nisi quas provident incidunt fugit rem rerum soluta. Deleniti aperiam sit nam voluptatum cupiditate minus id.'} 
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutPersonal 
          about1Name={'Peter Aspiazu'}
          about1Position={'Web Development'}
          about1Phone={'593 967454468'}
          about1Email={'paspiazusabando@gmail.com'}
          textBtnAbout={'Contact'}
        />
      </Container>
    </PlantillaLayout>
  )
}

export default AboutPage