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

export const PlantillaLayoutEs: FC<MetaProps> = ({ children, title, contentPage }) => {

  const {pathname} = useContext(UiContext)

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ contentPage } />
            <link rel="shortcut icon" href="/images/logo.png" />
        </Head>
        <Navbar 
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/informacion-empresa/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/informacion-empresa/contacto'}
          frequentQuestions={'Preguntas Frecuentes'}
          linkFrequentQuestions={'/es/informacion-empresa/preguntas-frecuentes'}
          services={'Servicios'}
          serviceOne={'Sitios Web'}
          linkServiceOne={'/es/servicios/sitios-web'}
          serviceTwo={'Diseño Gráfico'}
          linkServiceTwo={'/es/servicios/diseno-grafico'}
          serviceThree={'Tienda en Línea'}
          linkServiceThree={'/es/servicios/tienda-en-linea'}
          companyInformation={'Información de la empresa'}
          linkBtnLanguage={
            pathname === '/es'
            ? '/'
            : pathname === '/es/informacion-empresa/nosotros'
              ? '/company-information/about'
              : pathname === '/es/informacion-empresa/contacto'
                ? '/company-information/contact'
                : pathname === '/es/informacion-empresa/preguntas-frecuentes'
                  ? '/company-information/frequent-questions'
                  : pathname === '/es/servicios/sitios-web'
                    ? '/services/web-site'
                    : pathname === '/es/servicios/diseno-grafico'
                      ? '/services/graphic-design'
                      : pathname === '/es/servicios/tienda-en-linea'
                        ? '/services/e-commerce'
                        : pathname === '/es/politicas'
                          ? '/policies'
                          : '/'
          }
        />
        <Sidebar 
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/informacion-empresa/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/informacion-empresa/contacto'}
          frequentQuestions={'Preguntas Frecuentes'}
          linkFrequentQuestions={'/es/informacion-empresa/preguntas-frecuentes'}
          services={'Servicios'}
          serviceOne={'Sitios Web'}
          linkServiceOne={'/es/servicios/sitios-web'}
          serviceTwo={'Diseño Grafico'}
          linkServiceTwo={'/es/servicios/diseno-grafico'}
          serviceThree={'Tienda en Línea'}
          linkServiceThree={'/es/servicios/tienda-en-linea'}
          companyInformation={'Información de la empresa'}
          linkBtnLanguage={
            pathname === '/es'
            ? '/'
            : pathname === '/es/informacion-empresa/nosotros'
              ? '/company-information/about'
              : pathname === '/es/informacion-empresa/contacto'
                ? '/company-information/contact'
                : pathname === '/es/informacion-empresa/preguntas-frecuentes'
                  ? '/company-information/frequent-questions'
                  : pathname === '/es/servicios/sitios-web'
                    ? '/services/web-site'
                    : pathname === '/es/servicios/diseno-grafico'
                      ? '/services/graphic-design'
                      : pathname === '/es/servicios/tienda-en-linea'
                        ? '/services/e-commerce'
                        : pathname === '/es/politicas'
                          ? '/policies'
                          : '/'
          }
        />
        
        {children}
        
        <Footer
          presentCompany={'Es un emprendimiento dedicado a la creación de aplicaciónes web, usando tecnologías de confianza como NextJS, Material UI, CSS, React, Node, Mongo, Express, JWT, SQL.'}
          titleItems={'Páginas'}
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/informacion-empresa/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/informacion-empresa/contacto'}
          frequentQuestions={'Preguntas Frecuentes'}
          linkFrequentQuestions={'/es/informacion-empresa/preguntas-frecuentes'}
          titleItemsServices={'Páginas de Servicios'}
          serviceOne={'Páginas de Servicios'}
          linkServiceOne={'/es/servicios/sitios-web'}
          serviceTwo={'Diseño Gráfico'}
          linkServiceTwo={'/es/servicios/diseno-grafico'}
          serviceThree={'Tienda en Línea'}
          linkServiceThree={'/es/servicios/tienda-en-linea'}
          serviceFour={'Servicio 4'}
          linkServiceFour={'/es'}
          serviceFive={'Servicio 5'}
          linkServiceFive={'/es'}
          serviceSix={'Servicio 6'}
          linkServiceSix={'/es'}
          contactUs={'Contáctanos'}
          linkContactFooter={
            pathname === '/es/services/sitios-web'
            ? 'https://wa.link/i378jf'
            : pathname === '/es/services/diseno-grafico'
              ? 'https://wa.link/koa4lb'
              : pathname === '/es/services/tienda-en-linea'
              ? 'https://wa.link/98pisc'
              : 'https://wa.link/99bypk'
          }
          legalWarning={'Aviso Legal'}
          linkLegalWarning={'/es/politicas'}
          privacyPolicy={'Política de Privacidad'}
          linkPrivacyPolicy={'/es/politicas'}
          cookiesPolicy={'Política de Cookies'}
          linkCookiesPolicy={'/es/politicas'}
          labelName={'Nombre'}
          labelEmail={'Correo'}
          labelComment={'Comentario'}
          btnSubmit={'Enviar'}
          warningMessage={'Su mensaje se envió con éxito'}
          nameErrorMessage={'El nombre es requerido'}
          emailErrorMessage={'El correo es incorrecto'}
          messageErrorMessage={'El mensaje es requerido y debe tener 10 o más letras'}
          warningMessageInput={'Ingrese un valor'}
          variantForm={'standard'}
          TextButtonWhatsApp={'Contáctanos por WhatsApp'}
          messageButtonWhatsapp={
            pathname === '/es/services/sitios-web'
            ? 'https://wa.link/i378jf'
            : pathname === '/es/services/diseno-grafico'
              ? 'https://wa.link/koa4lb'
              : pathname === '/es/services/tienda-en-linea'
               ? 'https://wa.link/98pisc'
               : 'https://wa.link/99bypk'
          }
        />
    </>
  )
}
