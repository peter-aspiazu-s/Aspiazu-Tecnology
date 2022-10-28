import {FC} from 'react'
import { Container, Grid, Typography, Box } from '@mui/material';
import { PresentCompanyFooter } from './PresentCompanyFooter';
import { PagesItems } from './PagesItems';
import { PagesServicesItems } from './PagesServicesItems';
import { ContactSocialMedia } from './ContactSocialMedia';
import { FormFooter } from './FormFooter';
import { LegalTerms } from './LegalTerms';

interface FooterProps {
    presentCompany: string;
    titleItems: string;
    home: string;
    linkHome: string;
    about: string;
    linkAbout: string;
    contact: string;
    linkContact: string;
    titleItemsServices: string;
    serviceOne: string;
    linkServiceOne: string;
    serviceTwo: string;
    linkServiceTwo: string;
    serviceThree: string;
    linkServiceThree: string;
    contactUs:string;
    legalWarning:string;
    linkLegalWarning:string;
    privacyPolicy:string;
    linkPrivacyPolicy:string;
    cookiesPolicy:string;
    linkCookiesPolicy:string;
    labelName: string;
    labelEmail: string;
    labelComment: string;
    btnSubmit: string;
    warningMessage: string;
    nameErrorMessage: string;
    emailErrorMessage: string;
    messageErrorMessage: string;
    warningMessageInput: string;
    variantForm: string;
}

export const Footer: FC<FooterProps> = ({
    presentCompany,
    home, 
    titleItems,
    linkHome,
    about,
    linkAbout,
    contact,
    linkContact,
    titleItemsServices,
    serviceOne,
    linkServiceOne,
    serviceTwo,
    linkServiceTwo,
    serviceThree,
    linkServiceThree,
    contactUs,
    legalWarning,
    linkLegalWarning,
    privacyPolicy,
    linkPrivacyPolicy,
    cookiesPolicy,
    linkCookiesPolicy,
    labelName,
    labelEmail,
    labelComment,
    btnSubmit,
    warningMessage,
    nameErrorMessage,
    emailErrorMessage,
    messageErrorMessage,
    warningMessageInput,
    variantForm,
}) => {

  return (
    <Box 
        style={{
            height: "auto", 
            width: "100%",  
        }} 
        justifyContent="center"
        alignItems="center"
    >
        <Box sx={{ py:5, backgroundColor: 'primary.dark' }}>
            <Container>
                <Grid container columnSpacing={5} mb={5}>
                    <Grid item xs={12} md={6} mb={{xs: 2, md: 0}}>
                        <PresentCompanyFooter
                            presentCompany={presentCompany}
                        />
                    </Grid> 
                    <Grid 
                        item 
                        xs={12} 
                        sm={6} 
                        md={3} 
                        mb={{xs: 2, sm: 0}} 
                        sx={{textAlign: {xs: 'center', sm: 'left'}}}
                    >
                        <PagesItems
                            titleItems={titleItems}
                            home={home}
                            linkHome={linkHome}
                            contact={contact}
                            linkContact={linkContact}
                            about={about}
                            linkAbout={linkAbout}
                         />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign: {xs: 'center', sm: 'left'}}}>
                        <PagesServicesItems
                            titleItemsServices={titleItemsServices}
                            serviceOne={serviceOne}
                            linkServiceOne={linkServiceOne}
                            serviceTwo={serviceTwo}
                            linkServiceTwo={linkServiceTwo}
                            serviceThree={serviceThree}
                            linkServiceThree={linkServiceThree}
                        />
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" alignItems="center" columnSpacing={5}>
                    <Grid 
                        item 
                        xs={12} 
                        sm={5}
                        md={7} 
                        mb={{xs: 2, sm: 0}} 
                        sx={{ textAlign: 'center' }}
                    >
                        <ContactSocialMedia 
                            contactUs={contactUs}
                        />
                    </Grid>

                    <Grid item xs={12} sm={7} md={5}>
                        <FormFooter
                            labelName={labelName}
                            labelEmail={labelEmail}
                            labelComment={labelComment}
                            btnSubmit={btnSubmit}
                            warningMessage={warningMessage}
                            nameErrorMessage={nameErrorMessage}
                            emailErrorMessage={emailErrorMessage}
                            messageErrorMessage={messageErrorMessage}
                            warningMessageInput={warningMessageInput}
                            variantForm={variantForm}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <Box sx={{backgroundColor: 'primary.main', py:2}}>
            <Container>
                <Grid container>
                    <Grid item mb={{xs: 2, sm: 0}} xs={12} sm={4} md={6} sx={{textAlign: {xs: 'center', sm: 'left'}}}>
                        <Typography variant="subtitle2">2022 ® Aspiazu Tecnology</Typography>
                    </Grid>
                    <Grid 
                        item 
                        xs={12}
                        sm={8}
                        md={6} 
                        sx={{
                            display: 'flex', 
                            flexDirection: {xs: 'column', sm: 'row'}, 
                            justifyContent: 'space-around',
                            textAlign: {xs: 'center', sm: 'left'}
                        }}
                    >
                        <LegalTerms 
                            legalWarning={legalWarning}
                            linkLegalWarning={linkLegalWarning}
                            privacyPolicy={privacyPolicy}
                            linkPrivacyPolicy={linkPrivacyPolicy}
                            cookiesPolicy={cookiesPolicy}
                            linkCookiesPolicy={linkCookiesPolicy}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
  )
}
