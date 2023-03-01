import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { PlantillaLayoutEs } from '../../../components/layout';
import { AboutHeader, AboutMisionVision, AboutPersonal } from '../../../components/aboutPage';

const AboutPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Aspiazu Tech - Nosotros'} contentPage={'Somos EJC Home Improvement Corp. una empresa consolidada, con personal que cuenta con una gran trayectoria, con sede principal en el Estado de Nueva York. Nuestro enfoque se orienta a la gestión y ejecución de servicios de construcción, remodelación y reparación de infraestructuras.'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <AboutHeader 
          aboutTitle={'¿Quienes Somos?'}
          aboutSemiDescription={'Somos un grupo de desarrolladores de software, con experiencia y orientados a la web, también tenemos conocimientos en diseño gráfico.'}
          aboutVisitBTN={'Contactar'}
          aboutLinkMessageWhatsapp={'https://wa.link/99bypk'}
        />
      </Box>

      <Container sx={{py: 5}}>
        <AboutMisionVision 
          titleMision={'Misión'}
          descriptionMision={'Desarrollar software de calidad para nuestros clientes, antiguos y nuevos, ser capaz de brindar software que resuelvan una problematica en los negocios de nuestros clientes.'}
          titleVision={'Visión'}
          descriptionVision={'Ser una empresa de tecnología consolidada y ser la primera opción de los negocios, centros educativos, etc para resolver sus problematicas en software.'} 
        />
      </Container>

      <Container sx={{py: 5}}>
        <AboutPersonal 
          about1Name={'Peter Aspiazu'}
          about1Position={'Desarrollador Web'}
          about1Phone={'59367454468'}
          about1Email={'paspiazusabando@gmail.com'}
          about2Name={'María T. Loja'}
          about2Position={'Jefa Administrativa'}
          about2Phone={'99 999999999'}
          about2Email={'mloja@ejc-home.com'}
          textBtnAbout={'Contactar'}
          aboutt1Link={'https://wa.link/99bypk'}
          aboutt2Link={'https://wa.link/cvrs9e'}
        />
      </Container>

    </PlantillaLayoutEs>
  )
}

export default AboutPage;