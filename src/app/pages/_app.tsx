import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from './getPageContext'
import { asset, ja } from '../assets'
import createStore from '../store'

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
    //@ts-ignore
    const { Component, pageProps, store } = this.props
    asset.setContents(ja)
    return (
      <Container>
        <Provider store={store}>
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
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
