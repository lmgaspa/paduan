import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../layouts/home.module.css'
import foto1 from '../../src/image/foto2.jpg'

export default function Homecomponent() {

  let navigate = useNavigate()

  return (
    <section className={styles.containerhome} style={{ display: 'flex', flexDirection: 'row' }}>
      <div className={styles.divleft}>
        <p className={styles.texto}>BEM VINDO A <span>DIGITAL RAD</span> PRESTAÇÃO DE<span className={styles.span2}> MÃO DE OBRA </span>ESPECIALIZADA EM <span className={styles.span2}> RADIOLOGIA</span></p>
        <button onClick={() => navigate("/servicos")} className={styles.button1}>consulte nossos serviços</button>
        <button onClick={() => navigate("/orcamento")} className={styles.button2}>faça o seu orçamento</button>
      </div>
      <div className={styles.divright}>
        <img src={foto1} alt="imagem de radiologia"></img>
      </div>
    </section>
  )
}  
