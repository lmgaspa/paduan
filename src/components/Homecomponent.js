import React from 'react'
import imagem from '../image/imagemempresa.png'
import styles from '../layouts/home.module.css'

export default function Homecomponent() {
  return (
    <section>
      <div className={styles.containertextohome}>
        <p className={styles.texto}>BEM VINDO A DIGITAL RAD, PRESTAÇÃO DE<span> MÃO DE OBRA </span>ESPECIALIZADA EM <span> RADIOLOGIA</span></p>
      </div>
      <div>
        <img className={styles.imagem1} src={imagem} alt="imagem de radiologia"></img>
      </div>
      <div>
        <button className={styles.button1}>Consulte nossos Serviços</button>
        <button className={styles.button2}>Faça o seu Orçamento</button>
      </div>
    </section>
  )
}
