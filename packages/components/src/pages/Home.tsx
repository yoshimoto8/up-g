import * as React from 'react'
import { getLanguage } from '@up-g/assets'

export const Home = () => {
  return (
    <div>
      <p>you cli {getLanguage('test')}</p>
    </div>
  )
}
