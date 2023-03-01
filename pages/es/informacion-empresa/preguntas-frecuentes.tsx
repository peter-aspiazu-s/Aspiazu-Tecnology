import { NextPage } from 'next';
import { PlantillaLayoutEs } from '../../../components/layout';
import Container from '@mui/material/Container';
import { FrequentQuestions } from '../../../components/frequent-questions';

const PreguntasFrecuentesPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC | Preguntas Frecuentes'} contentPage={'Página de preguntas frecuentes'}>
        <Container sx={{mt: {xs: 15, sm: 16, md: 17}, mb: 2}}>    
            <FrequentQuestions
                frequentQuestionsTitle={'Preguntas Frecuentes'}
                frequentQuestionsSubtitle1={'¿Mi sitio web se verá bien en celulares y computadoras?'}
                frequentQuestionsDescription1={'Sí, el sitio web es creado en base a varios diseños, ya que lo adaptamos para que se vea bien en celulares, tabletas, laptops y computadoras.'}
                frequentQuestionsSubtitle2={'¿En qué país está disponible sus servicios?'}
                frequentQuestionsDescription2={'En países donde se pueda usar paypal para el pago en caso de que no estemos geograficamente ubicados en el mismo país y también para poder comunicarnos sin problemas el idioma es fundamental puede ser español o ingles.'}
                frequentQuestionsSubtitle3={'¿Cuánto tiempo se demora en crear el sitio web?'}
                frequentQuestionsDescription3={'siempre solicito máximo una semana de tiempo para entregar el proyecto, puede ser en menos tiempo pero eso depende de la situación.'}
                frequentQuestionsSubtitle4={'¿El servicio incluye la información para el sitio?'}
                frequentQuestionsDescription4={'El servicio no incluye la información, esa debe ser proporcionada por el cliente quien es el que conoce mejor su negocio.'}
            />
        </Container>
    </PlantillaLayoutEs>
  )
}

export default PreguntasFrecuentesPage