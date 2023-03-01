import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { PlantillaLayout } from '../../components/layout'
import { ServiceOneHeader, ServiceOneMore, WorkDone } from '../../components/servicesPages';

const RoofingPage: NextPage = () => {
  return (
    <PlantillaLayout title={'Aspiazu Tech | WebSite'} contentPage={'At EJC Home Improvement Corp, our priority is to help our clients to guarantee that their roofs receive the best repairs, using quality materials, helping them to last several years without the need of a replacement in a short period of time.'}>
      <Box sx={{mt: {xs: 13, sm: 14, md: 15}, height: 'auto', position: 'relative'}}>
        <ServiceOneHeader 
          ServiceOneHeaderTitle={'Website construction'}
          ServiceOneHeaderSemiDescription={'We create your website with the best technologies for the web.'}
          ServiceOneHeaderVisitBTN={'Contact'}
          ServiceOneHeaderLinkMessageWhastapp={'https://wa.link/skf9x5'}
        />
      </Box>
      {/* <Container sx={{py:5}}>
        <ServiceOneMore 
          serviceOneMoreTitle={'More about the service'}
          serviceOneMoreDescription1={'This is why a timely repair is considered necessary in order to have a proper maintenance and avoid major expenses in the future.'}
          serviceOneMoreDescription2={'At EJC Home Improvement Corp, our priority is to help our clients to guarantee that their roofs receive the best repairs, using quality materials, helping them to last several years without the need of a replacement in a short period of time.'}
          serviceOneMoreDescription3={'It is worth mentioning that our roofs and designs have an added value, since they can be customized to the needs of our customers, in order to improve their durability.'}
        />
      </Container>
      <Container sx={{py:5}}>
        <WorkDone 
          workDone={'Work Done'}
        />
      </Container> */}
    </PlantillaLayout>
  )
}

export default RoofingPage