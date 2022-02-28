import React from 'react'
import { Header } from '../header/Header'
import { Aside } from '../aside/Aside'
import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'
import { Wrapper } from '../wrapper/Wrapper'

export const Dashboard = () => {
  return (
    <div>
      <Aside />
      <Header />
      <Content />
      <Footer />
    </div>

  )
}
