import React from 'react'
import styles from '../layouts/servicos.module.css'
import terc from '../../src/image/terceirizacao.png'

export default function Servicos() {
  return (
    <div>
      <div className={styles.servicos}>
        <h1>Nossos Serviços</h1>
        <h3>Trabalhamos com a terceirização de serviços em radiologia ou seja, com a mão de
          obra técnica do profissional, gestão de centro de imagem e também com a
          telerradiologia ( laudos à distância ).
        </h3>
      </div>
      <div className={styles.divimagens}>
        <img src={terc} alt="terceirização beneficios"></img>
      </div>
    </div>
  )
}
