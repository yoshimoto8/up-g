import * as React from 'react'
import { getLanguage } from '@firebase-monorepo-starter/assets'

export const Home = () => {
  return (
    <div>
      <p>you cli {getLanguage('test')}</p>
    </div>
  )
}
