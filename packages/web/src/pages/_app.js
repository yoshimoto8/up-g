import React from 'react'
import App, { Container } from 'next/app'
import { asset, ja } from '@firebase-monorepo-starter/assets'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  // componentDidMount() {
  //   asset.setContents(ja)
  // }

  render() {
    const { Component, pageProps } = this.props
    asset.setContents(ja)

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
