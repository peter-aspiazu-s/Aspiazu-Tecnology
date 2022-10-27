import type { NextPage } from 'next'
import { Box, Container } from '@mui/material'
import { PlantillaLayoutEs } from '../../components/layout'
import { SlideHome } from '../../components/slides'
import { Technologies } from '../../components/technologies'
import { Testimonials } from '../../components/testimonials'
import { SectionAbout } from '../../components/about'
import { ServiceSection } from '../../components/service'
import { SectionContact } from '../../components/contact'

const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Aspiazu Tecnology - Home'} contentPage={'Creamos sitios web adaptables, hacemos trabajos de diseño gráfico y vendemos software de e-commerce'}>
      <Box sx={{mt: {xs: 5, sm: 7, md: 8}}}>
        <SlideHome 
          titleSlide1={'Construcción de sitios web'}
          descriptionService1={'Creamos tu sitio web con las mejores tecnologías para la web'}
          servicePath1={'/es/servicios/servicio-uno'}
          titleSlide2={'Trabajos de diseño gráfico'}
          descriptionService2={'Hacemos trabajos de diseño gráfico utilizando herramientas como photoshop, ilustrator, figma, etc'}
          servicePath2={'/es/servicios/servicio-dos'}
          titleSlide3={'Software de E-Commerce'}
          descriptionService3={'Desarrollamos tu Tienda en Línea que acepte pagos a nivel nacional e internacional'}
          servicePath3={'/es/servicios/servicio-tres'}
          start={'Empezar'}
        />
      </Box>
      <Box sx={{mt: -1, mb: 5, py:3, backgroundColor: 'primary.light'}}>
        <Container>
          <Technologies
            technologiesTitle={'Tecnologías'}
            technologiesSubTitle={'Tecnologías de desarrollo web y diseño gráfico'}
          />
        </Container>
      </Box>
      <Box sx={{py: 5}}>
        <Testimonials
          testimonialsTitle={'Testimonios de Clientes'}
          clientTestimonial1={`"Al inicio no estaba muy convencido de adquirir un sitio web, pero luego de conocer todo lo beneficios me decidí y contrate a Peter para que me ayudará con el trabajo y quedé muy satisfecho con el servicio."`}
          nameClient1={'Andres Contreras'}
          clientTestimonial2={`"Al inicio no estaba muy convencido de adquirir un sitio web, pero luego de conocer todo lo beneficios me decidí y contrate a Peter para que me ayudará con el trabajo y quedé muy satisfecho con el servicio."`}
          nameClient2={'Jefferson Ortega'}
        />
      </Box>
      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionAbout 
          aboutTitle={'Sobre Nosotros'}
          aboutSemiDescription={'Es una empresa dedicada a la creación de aplicaciones web...'}
          aboutVisitBTN={'Visitar Página'}
          aboutLinkBtn={'/es/nosotros'}
        />
      </Box>
      <Box sx={{py: 5}}>
        <Container>
          <ServiceSection
            serviceSectionTitle={'Servicios'}
            service1Title={'Construcción de Sitios Web'}
            service1Description={'Creamos tu sitio web con las mejores tecnologías para la web...'}
            service1Link={'/es/servicios/servicio-uno'}
            service2Title={'Trabajos de diseño gráfico'}
            service2Description={'Hacemos trabajos de diseño gráfico utilizando herramientas como...'}
            service2Link={'/es/servicios/servicio-dos'}
            service3Title={'Software de E-Commerce'}
            service3Description={'Desarrollamos tu Tienda en Línea que acepte pagos a nivel nacional e...'}
            service3Link={'/es/servicios/servicio-tres'}
            textBtn={'Visitar Página'}
          />
        </Container>
      </Box>

      <Box sx={{mb: -1, height: 'auto', position: 'relative'}}>
        <SectionContact 
          contactTitle={'Contáctanos'}
          contactSemiDescription={'Revisa las diferentes formas de contactarnos...'}
          contactVisitBTN={'Visitar Página'}
          contactLinkBtn={'/es/contacto'}
        />
      </Box>
    </PlantillaLayoutEs>
  )
}

export default HomePage
