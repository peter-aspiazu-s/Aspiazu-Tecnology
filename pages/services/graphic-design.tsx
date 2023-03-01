import type { NextPage } from 'next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import EngineeringIcon from '@mui/icons-material/Engineering';

import { PlantillaLayout } from '../../components/layout';

const SidingPage: NextPage = () => {
  return (
    <PlantillaLayout title={'Aspiazu Tech | Graphic design'} contentPage={'In EJC Home Improvement Corp in our siding service, we generate a coating that helps the care and maintenance of any infrastructure, making it more durable and protected from the outside.'}>
      <Container sx={{mt: {xs: 5, sm: 7, md: 8}, py: 5}}>
        <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid item xs={12}>
            <Typography sx={{fontSize: {xs: '40px', sm: '60px', md: '80px'}, color:'text.disabled', textAlign: 'center'}}>Page in maintenance</Typography>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <EngineeringIcon sx={{fontSize: {xs: '260px', sm: '280px', md: '300px'}, color:'text.disabled', textAlign: 'center'}} />
          </Grid>
        </Grid>
      </Container>
    </PlantillaLayout>
  )
}

export default SidingPage