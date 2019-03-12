import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from './getPageContext'
import { asset, ja } from '../assets'

class MyApp extends App {
  constructor() {
    //@ts-ignore
    super()
    //@ts-ignore
    this.pageContext = getPageContext()
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    asset.setContents(ja)
    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          //@ts-ignore
          registry={this.pageContext.sheetsRegistry}
          //@ts-ignore
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            //@ts-ignore
            theme={this.pageContext.theme}
            //@ts-ignore
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            {/*
            //@ts-ignore */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp

// import React from 'react'
// import App, { Container } from 'next/app'
// import { asset, ja } from '../assets'

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props
//     asset.setContents(ja)

//     return (
//       <Container>
//         <Component {...pageProps} />
//       </Container>
//     )
//   }
// }

// export default MyApp
