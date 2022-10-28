import type { NextPage } from 'next'
import { Typography, Container, Box } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'
import { Technologies } from '../components/technologies'
import { Testimonials } from '../components/testimonials'
import { SectionAbout } from '../components/about'
import { ServiceSection } from '../components/service'
import { SectionContact } from '../components/contact'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'Aspiazu Tecnology - Home'} contentPage={'Creadores de sitios web'}>
      <Box sx={{mt: {xs: 5, sm: 7, md: 8}}}>
        <SlideHome 
          titleSlide1={'Website construction'}
          descriptionService1={'We create your website with the best technologies for the web'}
          servicePath1={'/services/web-site'}
          titleSlide2={'Graphic design jobs'}
          descriptionService2={'We do graphic design work using tools such as photoshop, illustrator, figma, etc.'}
          servicePath2={'/services/graphic-design'}
          titleSlide3={'E-commerce software'}
          descriptionService3={'We develop your E-commerce that accepts payments nationally and internationally'}
          servicePath3={'/services/e-commerce'}
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
          aboutLinkBtn={'/about'}
        />
      </Box>
    
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Services'}
            service1Title={'Website construction'}
            service1Description={'We create your website with the best technologies for the web...'}
            service1Link={'/services/web-site'}
            service2Title={'Graphic design jobs'}
            service2Description={'We do graphic design work using tools such as photoshop, illustrator...'}
            service2Link={'/services/graphic-design'}
            service3Title={'E-commerce software'}
            service3Description={'We develop your E-commerce that accepts payments nationally and...'}
            service3Link={'/services/e-commerce'}
            textBtn={'Visit The Page'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contact Us'}
          contactSemiDescription={'Check the different ways to contact us...'}
          contactVisitBTN={'Visit The Page'}
          contactLinkBtn={'/contact'}
        />
      </Box>
    </PlantillaLayout>
  )
}

export default HomePage
