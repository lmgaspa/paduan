import React from 'react'
import PreNavBar from '../components/PreNavBar'
import Navbar from '../components/Navbar'
import styles from '../layouts/layoutpages/servicospage.module.css'
import terc from '../image/terceirizacao.png'

export default function ServicosPage() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.servicos}>
      <div className={styles.servicodiv}>
        <h1>Nossos Serviços</h1>
        <h3>Trabalhamos com a terceirização de serviços em radiologia ou seja, com a mão de
          obra técnica do profissional, gestão de centro de imagem e também com a
          telerradiologia ( laudos à distância ).
        </h3>
      </div>
      <img src={terc} alt="terceirização beneficios"></img>
    </div >
    </section>
  )
}
