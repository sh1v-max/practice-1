import React from 'react'
import { Hello } from './Components/Hello'
import Header from './Components/header'
import ImageSlide from './Components/ImageSlide'

export const App = () => {
  return (
    <div>
      <Header/>
      <ImageSlide/>
      {/* <Hello/> */}
    </div>
  )
}
