import type { NextPage } from 'next';

import Box from '@mui/material/Box';

import { PlantillaLayoutEs } from '../../../components/layout';
import { ServiceOneHeader } from '../../../components/servicesPages';

const TechumbrePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC | Roofing'} contentPage={'En EJC Home Improvement Corp, nuestra prioridad está en ayudar a nuestros clientes a garantizar que sus techos reciban las mejores reparaciones, utilizando materiales de calidad, ayudando a que perduren varios años sin necesidad de un reemplazo en corto tiempo.'}>
      
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceOneHeader 
          ServiceOneHeaderTitle={'Roofing'}
          ServiceOneHeaderSemiDescription={'La construcción, limpieza y reemplazo de techos en EJC Home Improvement Corp. es una de las mejores inversiones que un propietario puede hacer, ya que la calidad de trabajo y los materiales instalados son de alta calidad.'}
          ServiceOneHeaderVisitBTN={'Contáctanos'}
          ServiceOneHeaderLinkMessageWhastapp={'https://wa.link/pb7a0b'}
        />
      </Box>
      
    </PlantillaLayoutEs>
  )
}

export default TechumbrePage