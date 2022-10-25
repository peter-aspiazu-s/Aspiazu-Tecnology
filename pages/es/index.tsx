import type { NextPage } from 'next'
import { PlantillaLayoutEs } from '../../components/layout'
import { SlideHome } from '../../components/slides'

const HomePage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'Plantilla 1 - Home'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <SlideHome 
        titleSlide1={'Construcción de sitios web'}
        servicePath1={'/es/servicios/servicio-uno'}
        titleSlide2={'Trabajos de diseño gráfico'}
        servicePath2={'/es/servicios/servicio-dos'}
        titleSlide3={'Software de E-Commerce'}
        servicePath3={'/es/servicios/servicio-tres'}
        start={'Empezar'}
      />
    </PlantillaLayoutEs>
  )
}

export default HomePage
