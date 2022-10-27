import type { NextPage } from 'next'
import { Typography, Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'
import { Technologies } from '../components/technologies'
import { Testimonials } from '../components/testimonials'
import { SectionAbout } from '../components/about'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'Aspiazu Tecnology - Home'} contentPage={'Creadores de sitios web'}>
      <Box sx={{mt: {xs: 5, sm: 7, md: 8}}}>
        <SlideHome 
          titleSlide1={'Website construction'}
          descriptionService1={'We create your website with the best technologies for the web'}
          servicePath1={'/services/service-one'}
          titleSlide2={'Graphic design jobs'}
          descriptionService2={'We do graphic design work using tools such as photoshop, illustrator, figma, etc.'}
          servicePath2={'/services/service-two'}
          titleSlide3={'E-commerce software'}
          descriptionService3={'We develop your E-commerce that accepts payments nationally and internationally'}
          servicePath3={'/services/service-three'}
          start={'Start'}
        />
      </Box>
      <Box sx={{mt: -1, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Technologies'}
            technologiesSubTitle={'Web development and graphic design technologies'}
          />
        </Container>
      </Box>
      <Box sx={{py: 5}}>
        <Testimonials
          testimonialsTitle={'Customer Testimonials'}
          clientTestimonial1={`"At first I wasn't very convinced about buying a website, but after knowing all the benefits I decided and hired Peter to help me with the work and I was very satisfied with the service."`}
          nameClient1={'Andres Contreras'}
          clientTestimonial2={`"At first I wasn't very convinced about buying a website, but after knowing all the benefits I decided and hired Peter to help me with the work and I was very satisfied with the service."`}
          nameClient2={'Jefferson Ortega'}
        />
      </Box>
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'About Us'}
          aboutSemiDescription={'It is a company dedicated to the creation of web applications...'}
          aboutVisitBTN={'Visit The Page'}
        />
      </Box>
    </PlantillaLayout>
  )
}

export default HomePage
