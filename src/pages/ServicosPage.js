import React from 'react'
import PreNavBar from '../components/PreNavBar'
import Navbar from '../components/Navbar'
import styles from '../layouts/layoutpages/servicospage.module.css'
import terceirizacao from '../image/terceirizacao.png'

export default function ServicosPage() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.containerservicospage}>
        <div className={styles.containerservicostexto}>
          <h1>Nossos Serviços</h1>
          <h3>A nossa função consiste em terceirizar
            serviços de radiologia e demais diagnósticos de imagens,
            bem como facilitar as empresas commenos burocracia e menos
            custos e encargos.</h3>
          <h3>
            Contamos com uma equipe de profissionais avaliados e
            selecionados na nossa equipe.</h3>
          <h3>
            A excelência de nossos serviços pode ser comprovada por mais de <span>8 anos de experiência </span>
            no mercado de terceirização em serviços radiológicos e pelo atendimento oferecido aos nossos clientes.</h3>
          <h1>Quem são os nossos parceiros?</h1>
          <h3>
            Entre os nossos clientes e parceiros, temos a Irmandade da Santa Casa de Misericórdia de Curitiba e Clínica de Diagnóstico Capão Raso,
            que podem atestar a satisfação e o sucesso da nossa parceria.</h3>
          <h3>
            Para conhecer melhor a nossa empresa, você pode encaminhar um email para <span>digital.rad@outlook.com</span>
          </h3>
          <h3>
            Ficamos à disposição para mais informações e para a imediata elaboração de um plano de ação.
          </h3>
        </div>
        <img className={styles.servicopageimg} src={terceirizacao} alt="Sobre as vantagens de terceirizar"></img>
      </div>
    </section>
  )
}
