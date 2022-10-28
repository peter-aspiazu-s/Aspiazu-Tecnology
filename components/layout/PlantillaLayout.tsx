import React, { FC, ReactNode, useState } from 'react'
import Head from 'next/head'
import { Sidebar, Navbar } from '../navbar';
import { Footer } from '../footer';

type MetaProps = {
    children: ReactNode,
    title: string,
    contentPage: string,
}

export const PlantillaLayout: FC<MetaProps> = ({ children, title, contentPage }) => {

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
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/about'}
          contact={'Contact'}
          linkContact={'/contact'}
          services={'Services'}
          serviceOne={'Web Site'}
          linkServiceOne={'/services/service-one'}
          serviceTwo={'Graphic Design'}
          linkServiceTwo={'/services/service-two'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/services/service-three'}
          linkBtnLanguage={'/es'}
        />
        <Sidebar 
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/about'}
          contact={'Contact'}
          linkContact={'/contact'}
          services={'Services'}
          serviceOne={'Web Site'}
          linkServiceOne={'/services/service-one'}
          serviceTwo={'Graphic Design'}
          linkServiceTwo={'/services/service-two'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/services/service-three'}
          linkBtnLanguage={'/es'}
        />

        {children}
        
        <Footer 
          presentCompany={'It is a company dedicated to the creation of web applications, using reliable technologies such as NextJS, Material UI, CSS, React, Node, Mongo, Express, JWT, SQL'}
          titleItems={'Pages'}
          home={'Home'}
          linkHome={'/'}
          about={'About'}
          linkAbout={'/about'}
          contact={'Contact'}
          linkContact={'/contact'}
          titleItemsServices={'Service Pages'}
          serviceOne={'Web Site'}
          linkServiceOne={'/services/service-one'}
          serviceTwo={'Graphic Design'}
          linkServiceTwo={'/services/service-two'}
          serviceThree={'E-Commerce'}
          linkServiceThree={'/services/service-three'}
          contactUs={'Contact Us'}
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
        />
    </>
  )
}
