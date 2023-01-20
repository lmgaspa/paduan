import React from 'react'
import PreNavBar from '../components/PreNavBar'
import Navbar from '../components/Navbar'
import styles from '../layouts/layoutpages/quemsomos.module.css'
import imagem from '../image/imagemempresa.png'

export default function Quemsomos() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.containerquemprincipal}>
        <div className={styles.containerquemprimeiro}>
          <h1>Quem somos? </h1>
          <p>A Digital Radiológica é uma empresa que vem atuando na prestação de serviços terceirizados em radiologia no estado do Paraná desde 2015
            e em processos licitatórios pelo Brasil.</p>
          <p>A excelência de nossos serviços pode ser comprovada por mais de 8 anos de experiência no mercado
            da terceirização em serviços radiológicos e pelo atendimento oferecido por profissionais especializados e comprometidos
            para atender nossos clientes, oferecendo assim segurança e qualidade para o serviço.</p>
        </div>
        <img className={styles.quemimagem} src={imagem} alt="imagem de radiologia"></img>
      </div>
      <div className={styles.containerquemsegundo}>
        <h1>Quem são nossos parceiros?</h1>
        <p>Dentre nossos parceiros estão a Irmandade da Santa Casa de Misericórdia de Curitiba, Clínica de Diagnóstico Capão Raso, Clínica Dr. Mantovani
          na cidade de Fazenda Rio Grande, FEAS - Fundação Estatal de Atenção à Saúde de Curitiba, entre outros no interior do Estado Do Paraná.</p>
        <h2>Caso queira conhecer mais sobre nossos serviços e solicitar um orçamento, envie um e-mail para <span>digital.rad@outlook.com</span></h2>
      </div>
    </section>
  )
}

/* {
  
  
  */