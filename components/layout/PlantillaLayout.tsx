import React, { FC, ReactNode, useContext } from 'react';
import Head from 'next/head';
import { Sidebar, Navbar } from '../navbar';
import { Footer } from '../footer';
import { UiContext } from '../../context';

type MetaProps = {
    children: ReactNode,
    title: string,
    contentPage: string,
}

export const PlantillaLayout: FC<MetaProps> = ({ children, title, contentPage }) => {

  const {pathname} = useContext(UiContext)

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ contentPage } />
            <link rel="shortcut icon" href="/images/logo.png" />
        </Head>
        <Navbar 
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/company-information/about'}
          contact={'Contact'}
          linkContact={'/company-information/contact'}
          frequentQuestions={'Frequent Questions'}
          linkFrequentQuestions={'/company-information/frequent-questions'}
          services={'Services'}
          serviceOne={'Web Site'}
          linkServiceOne={'/services/web-site'}
          serviceTwo={'Graphic Design'}
          linkServiceTwo={'/services/graphic-design'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/services/e-commerce'}
          companyInformation={'Company Information'}
          linkBtnLanguage={
            pathname === '/' 
            ? '/es'
            : pathname === '/company-information/about' 
              ? '/es/informacion-empresa/nosotros'
              : pathname === '/company-information/contact'
                ? '/es/informacion-empresa/contacto'
                : pathname === '/services/web-site'
                  ? '/es/servicios/sitios-web'
                  : pathname === '/services/graphic-design'
                    ? '/es/servicios/diseno-grafico'
                    : pathname === '/services/e-commerce'
                      ? '/es/servicios/tienda-en-linea'
                      : pathname === '/policies'
                        ? '/es/politicas'
                        : pathname === '/company-information/frequent-questions'
                          ? '/es/informacion-empresa/preguntas-frecuentes'
                          : '/'
          }
        />
        <Sidebar 
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/company-information/about'}
          contact={'Contact'}
          linkContact={'/company-information/contact'}
          frequentQuestions={'Frequent Questions'}
          linkFrequentQuestions={'/company-information/frequent-questions'}
          services={'Services'}
          serviceOne={'Web Site'}
          linkServiceOne={'/services/web-site'}
          serviceTwo={'Graphic Design'}
          linkServiceTwo={'/services/graphic-design'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/services/e-commerce'}
          companyInformation={'Company Information'}
          linkBtnLanguage={
            pathname === '/' 
            ? '/es'
            : pathname === '/company-information/about' 
              ? '/es/informacion-empresa/nosotros'
              : pathname === '/company-information/contact'
                ? '/es/informacion-empresa/contacto'
                : pathname === '/services/web-site'
                  ? '/es/servicios/sitios-web'
                  : pathname === '/services/graphic-design'
                    ? '/es/servicios/diseno-grafico'
                    : pathname === '/services/e-commerce'
                      ? '/es/servicios/tienda-en-linea'
                      : pathname === '/policies'
                        ? '/es/politicas'
                        : pathname === '/company-information/frequent-questions'
                          ? '/es/informacion-empresa/preguntas-frecuentes'
                          : '/'
          }
        />

        {children}
        
        <Footer 
          presentCompany={'It is an entrepreneurship dedicated to the creation of web application, using trusted technologies such as Nextjs, UI Material, CSS, React, Node, Mongo, Express, Jwt, SQL.'}
          titleItems={'Pages'}
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/company-information/about'}
          contact={'Contact'}
          linkContact={'/company-information/contact'}
          frequentQuestions={'Frequent Questions'}
          linkFrequentQuestions={'/company-information/frequent-questions'}
          titleItemsServices={'Service Pages'}
          serviceOne={'Web Site'}
          linkServiceOne={'/services/web-site'}
          serviceTwo={'Graphic Design'}
          linkServiceTwo={'/services/graphic-design'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/services/e-commerce'}
          serviceFour={'Service 4'}
          linkServiceFour={'/'}
          serviceFive={'Service 5'}
          linkServiceFive={'/'}
          serviceSix={'Service 6'}
          linkServiceSix={'/'}
          contactUs={'Contact Us'}
          linkContactFooter={
            pathname === '/services/web-site'
            ? 'https://wa.link/osqy9c'
            : pathname === '/services/graphic-design'
              ? 'https://wa.link/o9ve33'
              : pathname === '/services/e-commerce'
               ? 'https://wa.link/lasr86'
               : 'https://wa.link/ajnanv'
          }
          legalWarning={'Legal Warning'}
          linkLegalWarning={'/policies'}
          privacyPolicy={'Privacy Policy'}
          linkPrivacyPolicy={'/policies'}
          cookiesPolicy={'Cookies Policy'}
          linkCookiesPolicy={'/policies'}
          labelName={'Name'}
          labelEmail={'Email'}
          labelComment={'Comment'}
          btnSubmit={'Submit'}
          warningMessage={'your message was sent successfully'}
          nameErrorMessage={'name is required'}
          emailErrorMessage={'The email is incorrect'}
          messageErrorMessage={'The message is required and must have 10 or more letters'}
          warningMessageInput={'Please enter a value'}
          variantForm={'standard'}
          TextButtonWhatsApp={'Contact us by WhatsApp'}
          messageButtonWhatsapp={
            pathname === '/services/web-site'
            ? 'https://wa.link/osqy9c'
            : pathname === '/services/graphic-design'
              ? 'https://wa.link/o9ve33'
              : pathname === '/services/e-commerce'
               ? 'https://wa.link/lasr86'
               : 'https://wa.link/ajnanv'
          }
        />
    </>
  )
}
