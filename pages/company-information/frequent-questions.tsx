import { NextPage } from 'next';
import { PlantillaLayout } from '../../components/layout';
import Container from '@mui/material/Container';
import { FrequentQuestions } from '../../components/frequent-questions';

const frequentQuestionsPage: NextPage = () => {
  return (
    <PlantillaLayout title={'EJC | Frequent Questions'} contentPage={'Page of frequent questions'}>
        <Container sx={{mt: {xs: 15, sm: 16, md: 17}, mb: 2}}>    
            <FrequentQuestions
                frequentQuestionsTitle={'Frequently Asked Questions'}
                frequentQuestionsSubtitle1={'Will my website look good in cell phones and computers?'}
                frequentQuestionsDescription1={'Yes, the website is created based on several designs, since we adapt it to look good in cell phones, tablets, laptops and computers.'}
                frequentQuestionsSubtitle2={'In which country is your services available?'}
                frequentQuestionsDescription2={'In countries where PayPal can be used for payment in case we are not geographically located in the same country and also to be able to communicate without problems the language is fundamental can be Spanish or English.'}
                frequentQuestionsSubtitle3={'How long does it take to create the website?'}
                frequentQuestionsDescription3={'I always request a maximum of a week of time to deliver the project, it can be in less time but that depends on the situation.'}
                frequentQuestionsSubtitle4={'Does the service include information for the site?'}
                frequentQuestionsDescription4={'The service does not include the information, that must be provided by the client who is the one who knows his business best.'}
            />
        </Container>
    </PlantillaLayout>
  )
}

export default frequentQuestionsPage