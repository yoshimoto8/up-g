import * as React from 'react'
import { getLanguage } from '../../assets'
import Header from '../organisms/Header'

export const Home = () => {
  return (
    <div>
      <Header />
      <p>you cli {getLanguage('test')}</p>
    </div>
  )
}
