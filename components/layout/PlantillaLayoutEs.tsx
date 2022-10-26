import React, { FC, ReactNode, useState } from 'react'
import Head from 'next/head'
import { Container } from '@mui/material';
import { Sidebar, Navbar } from '../navbar';
import { Footer } from '../footer';

type MetaProps = {
    children: ReactNode,
    title: string,
    contentPage: string,
}

export const PlantillaLayoutEs: FC<MetaProps> = ({ children, title, contentPage }) => {

  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ contentPage } />
        </Head>
        {/* TODO: Crear otro layout para el spanish  */}
        {/* TODO: Hacer que los componentes reciban los paths y los textos por props
                  ya que así podré mandar texto en inglés y en español */}
        <Navbar 
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/contacto'}
          services={'Servicios'}
          serviceOne={'Sitios Web'}
          linkServiceOne={'/es/servicios/servicio-uno'}
          serviceTwo={'Diseño Gráfico'}
          linkServiceTwo={'/es/servicios/servicio-dos'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/es/servicios/servicio-tres'}
          btnLanguage={'en'}
          linkBtnLanguage={'/'}
        />
        <Sidebar 
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/contacto'}
          services={'Servicios'}
          serviceOne={'Sitios Web'}
          linkServiceOne={'/es/servicios/servicio-uno'}
          serviceTwo={'Diseño Gráfico'}
          linkServiceTwo={'/es/servicios/servicio-dos'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/es/servicios/servicio-tres'}
          btnSidebarLanguage={'en'}
          linkBtnLanguage={'/'}
        />
        
        {children}
        
        <Footer
          presentCompany={'Es un empresa dedicada a la creación de aplicaciónes web, usando tecnologías de confianza como NextJS, Material UI, CSS, React, Node, Mongo, Express, JWT, SQL'}
          titleItems={'Páginas'}
          home={'Inicio'}
          linkHome={'/es'}
          about={'Nosotros'}
          linkAbout={'/es/nosotros'}
          contact={'Contacto'}
          linkContact={'/es/contacto'}
          titleItemsServices={'Páginas de Servicios'}
          serviceOne={'Sitio Web'}
          linkServiceOne={'/es/servicios/servicio-uno'}
          serviceTwo={'Diseño Gráfico'}
          linkServiceTwo={'/es/servicios/servicio-dos'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/es/servicios/servicio-tres'}
          contactUs={'Contáctanos'}
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
        />
    </>
  )
}
