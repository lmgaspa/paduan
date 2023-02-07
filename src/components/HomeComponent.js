import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from '../layouts/home.module.css'
import foto1 from '../../src/image/foto2.jpg'

export default function Homecomponent() {

  let navigate = useNavigate ()

  return (
    <div className={styles.containerhome}>
      <div>
        <p className={styles.texto}>BEM VINDO A DIGITAL RAD PRESTAÇÃO DE<span> MÃO DE OBRA </span>ESPECIALIZADA EM <span> RADIOLOGIA</span></p>
        </div>
        <div className={styles.containerbutton}>
        <button onClick={() => navigate("/servicos")} className={styles.button1}>Consulte nossos Serviços</button>
        <button onClick={() => navigate("/orcamento")} className={styles.button2}>Faça o seu Orçamento</button>
        <img src={foto1} alt="imagem de radiologia"></img>
      </div>
    </div>
  )
}
