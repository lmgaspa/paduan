import React from 'react'
import Servicos from '../components/Servicos'
import Footer from '../components/Footer'
import Parceiros from '../components/Parceiros'
import Homecomponent from '../components/Homecomponent'
import Navbar from '../components/Navbar'
import PreNavBar from '../components/PreNavBar'

export default function Home() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <Homecomponent />
      <Servicos />
      <Parceiros />
      <Footer />
    </section>
  )
}