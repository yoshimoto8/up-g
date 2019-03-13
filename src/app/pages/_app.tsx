import React from 'react'
import App, { Container } from 'next/app'
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
        <JssProvider
          //@ts-ignore
          registry={this.pageContext.sheetsRegistry}
          //@ts-ignore
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            //@ts-ignore
            theme={this.pageContext.theme}
            //@ts-ignore
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />

            {/*
               // @ts-ignore */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp
