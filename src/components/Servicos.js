import React from 'react'
import styles from '../layouts/servicos.module.css'
import imgservico from '../../src/image/imgservico.png'
import terc from '../../src/image/terceirizacao.png'

export default function Servicos() {
  return (
    <div className={styles.servicos}>
      <div className={styles.servicodiv}>
        <h1>Nossos Serviços</h1>
        <h3>Trabalhamos com terceirização de serviços em radiologia, desde a mão de obra técnica, gestão de centro de imagem e laudos através da telerradiologia.
        </h3>
      </div>
      <img src={imgservico} alt="servicos"></img>
    </div >
  )
}