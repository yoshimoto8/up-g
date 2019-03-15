import * as React from 'react'
import { getLanguage } from '../../assets'
import Main from '../organisms/Main'

export const Home = () => {
  return (
    <Main>
      <div>
        <p>you cli {getLanguage('test')}</p>
      </div>
    </Main>
  )
}
