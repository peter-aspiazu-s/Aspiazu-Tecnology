import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayout } from '../components/layout'
import { SlideHome } from '../components/slides'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'Aspiazu Tecnology - Home'} contentPage={'Creadores de sitios web'}>
      <SlideHome 
        titleSlide1={'Website construction'}
        servicePath1={'/services/service-one'}
        titleSlide2={'Graphic design jobs'}
        servicePath2={'/services/service-two'}
        titleSlide3={'E-commerce software'}
        servicePath3={'/services/service-three'}
        start={'Start'}
      />
    </PlantillaLayout>
  )
}

export default HomePage
