import React from 'react'

import MainBanner from './MainBanner/MainBanner'
import MainAuth from '../MainAuth/MainAuth'
import MainAdvantages from './MainAdvantages/MainAdvantages'
import MainPrice from './MainPrice/MainPrice'

export default function Main() {
  const userAuth = true
  return (
    <div>
      {(userAuth && (
        <>
          <MainBanner />
          <MainAdvantages />
          <MainPrice />
        </>
      )) || (
        <>
          <MainAuth />
        </>
      )}
    </div>
  )
}
