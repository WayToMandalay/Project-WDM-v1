import '../assets/scss/app.scss'

import { MyProvider } from '../context'

import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import SecondFooter from '@components/SecondFooter'
import { throttle } from '@helpers/index'
import OwlMobile from '@components/OwlMobile'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        }
        const handler = throttle(appHeight, 100)
        window.addEventListener('resize', handler)
        appHeight()
        try {
            screen.orientation.lock('portrait').then().catch()
        } catch (e) {}
        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])

    return (
        <MyProvider>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="preconnect" href="https://use.typekit.net" />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/hvz6zjm.css"
                />
            </Head>
            <Header />
            {/* <NavBar/> */}
            {/* <Icons></Icons> */}
            <>
                <Component {...pageProps} />
            </>
            <OwlMobile />
            <Footer />
            <SecondFooter />
        </MyProvider>
    )
}

export default MyApp
