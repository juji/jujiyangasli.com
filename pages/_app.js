import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalProvider } from 'contexts/GlobalContext'
import theme from 'lib/theme'
import Layout from 'components/Layout'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps }
  //
  // }


  render() {

    const { Component, pageProps } = this.props

    return <ThemeProvider theme={theme()}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Juji is a web developer. Living in Tangerang, Indonesia. Doing what he loves best." />
          <meta property="og:image" content="http://j.mp/2GYbJeT" />

          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Source+Code+Pro|Source+Serif+Pro" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="stylesheet" type="text/css" href="/styles/index.css" />
          <link rel="stylesheet" type="text/css" href="/styles/tippy.css" />

        </Head>
        <GlobalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalProvider>
    </ThemeProvider>

  }
}

export default MyApp
