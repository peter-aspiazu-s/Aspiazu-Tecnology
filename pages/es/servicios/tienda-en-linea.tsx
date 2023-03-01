import type { NextPage } from 'next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EngineeringIcon from '@mui/icons-material/Engineering';

import { PlantillaLayoutEs } from '../../../components/layout';

const CanalonesPage: NextPage = () => {
  return (
    <PlantillaLayoutEs title={'EJC | Gutters'} contentPage={'EJC Home Improvement Corp es la mejor opción para una instalación eficiente de canaletas para lluvia ya que trabajamos con materiales de alta durabilidad y nos aseguramos que tu infraestructura tendrá el desfogue necesario para las diferentes condiciones climáticas'}>
      <Container sx={{mt: {xs: 5, sm: 7, md: 8}, py: 5}}>
        <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: {xs: '40px', sm: '60px', md: '80px'}, color:'text.disabled', textAlign: 'center'}}>Página en mantenimiento</Typography>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <EngineeringIcon sx={{fontSize: {xs: '260px', sm: '280px', md: '300px'}, color:'text.disabled', textAlign: 'center'}} />
          </Grid>
        </Grid>
      </Container>
    </PlantillaLayoutEs>
  )
}

export default CanalonesPage