import React from 'react'
import styles from '../layouts/servicos.module.css'
import terceirizacao from '../image/terceirizacao.png'

export default function Servicos() {
  return (
    <section className={styles.servicos}>
      <div className={styles.divservicos}>
      <h1>Nossos Serviços</h1>
      <h3>A nossa função consiste em <span>terceirizar
        serviços de radiologia e demais diagnósticos de imagens</span>,
        bem como facilitar as empresas com <span>menos burocracia e menos
          custos e encargos.</span>
      </h3>
      <h3>
        Contamos com uma equipe de profissionais avaliados e
        selecionados na nossa equipe.
      </h3>
      </div>
      <img className={styles.servicoimg} src={terceirizacao} alt="Sobre as vantagens de terceirizar"></img>
    </section>
  )
}
