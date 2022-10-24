import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PlantillaLayout } from '../components/layout'

const HomePage: NextPage = () => {

  return (
    <PlantillaLayout title={'Plantilla 1 - Home'} contentPage={'Plantilla 1 para agilizar el desarrollo de los sitios web'}>
      <Typography variant="h5" sx={{color:'text.disabled'}}>Plantilla 1 - Home</Typography>
      <Typography variant="body1" sx={{color:'text.disabled'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem repellat delectus ducimus ea doloremque beatae autem eos illo, iste dicta quibusdam cum numquam enim facilis ratione vel eveniet eum!</Typography>
      <Typography variant="body1" sx={{color:'text.disabled'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem repellat delectus ducimus ea doloremque beatae autem eos illo, iste dicta quibusdam cum numquam enim facilis ratione vel eveniet eum!</Typography>
      <Typography variant="body1" sx={{color:'text.disabled'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem repellat delectus ducimus ea doloremque beatae autem eos illo, iste dicta quibusdam cum numquam enim facilis ratione vel eveniet eum!</Typography>
      <Typography variant="body1" sx={{color:'text.disabled'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem repellat delectus ducimus ea doloremque beatae autem eos illo, iste dicta quibusdam cum numquam enim facilis ratione vel eveniet eum!</Typography>
      <Typography variant="body1" sx={{color:'text.disabled'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero exercitationem repellat delectus ducimus ea doloremque beatae autem eos illo, iste dicta quibusdam cum numquam enim facilis ratione vel eveniet eum!</Typography>
    </PlantillaLayout>
  )
}

export default HomePage
