import React from 'react'
import { useNavigate } from 'react-router-dom'
import imagem from '../image/imagemempresa.png'
import styles from '../layouts/home.module.css'

export default function Homecomponent() {

  let navigate = useNavigate ()

  return (
    <section className={styles.containerhome}>
      <div>
        <p className={styles.texto}>BEM VINDO A DIGITAL RAD PRESTAÇÃO DE<span> MÃO DE OBRA </span>ESPECIALIZADA EM <span> RADIOLOGIA</span></p>
        <button onClick={() => navigate("/servicos")} className={styles.button1}>Consulte nossos Serviços</button>
        <button onClick={() => navigate("/orcamento")} className={styles.button2}>Faça o seu Orçamento</button>
        <img src={imagem} alt="imagem de radiologia"></img>
      </div>
    </section>
  )
}
