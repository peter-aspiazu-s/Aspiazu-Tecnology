import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { PlantillaLayout } from '../../components/layout';
import { AboutHeader, AboutMisionVision, AboutPersonal } from '../../components/aboutPage';

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC - About'} contentPage={'We are EJC Home Improvement Corp., a well-established company with a long-standing staff, headquartered in New York State. Our focus is oriented towards the management and execution of construction, remodeling and infrastructure repair services.'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'About Us?'}
          aboutSemiDescription={'We are a group of software developers, with experience and web oriented, we also have knowledge in graphic design.'}
          aboutVisitBTN={'Contact'}
          aboutLinkMessageWhatsapp={'https://wa.link/ajnanv'}
        />
      </Box>

      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Mision'}
          descriptionMision={"Develop quality software for our customers, old and new, to be able to provide software that solves a problem in our customers' businesses."}
          titleVision={'Vision'}
          descriptionVision={'Be a consolidated technology company and be the first business option, educational centers, etc. to solve its software problems.'} 
        />
      </Container>
      <Container sx={{py: 5}}>
        <AboutPersonal 
          about1Name={'Peter Aspiazu'}
          about1Position={'Web Development'}
          about1Phone={'593 967454468'}
          about1Email={'paspiazusabando@gmail.com'}
          about2Name={'María T. Loja'}
          about2Position={'Administrative Head'}
          about2Phone={'99 999999999'}
          about2Email={'mloja@ejc-home.com'}
          textBtnAbout={'Contact'}
          aboutt1Link={'https://wa.link/ajnanv'}
          aboutt2Link={'https://wa.link/ers6zv'}
        />
      </Container>
    
    </PlantillaLayout>
  )
}

export default AboutPage;