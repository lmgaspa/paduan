import React from 'react'
import PreNavBar from '../components/PreNavBar'
import Navbar from '../components/Navbar'
import styles from '../layouts/layoutpages/servicospage.module.css'
import terc from '../image/terceirizacao.png'
import imgservico from '../../src/image/imgservico.png'
import foto1 from '../../src/image/foto2.jpg'

export default function ServicosPage() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.servicos}>
        <div className={styles.servicodiv}>
          <h1>Nossos Serviços</h1>
          <h3>Trabalhamos com terceirização de serviços em radiologia, desde a mão de obra técnica, gestão de centro de imagem e laudos através da telerradiologia.
          </h3>
          <img style={{ width: '80%', marginTop: 40 }} src={terc} alt="terceirizacao beneficios"></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ alignItems: 'center', marginTop: 40, width: '70%' }} src={imgservico} alt="serviços prestados"></img>
          <img style={{ alignItems: 'center', marginTop: 40, width: '70%' }} src={foto1} alt="homem olhando laudos"></img>
        </div>
      </div>
    </section>
  )
}
