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
          <h3>A Digital Radiológica é uma empresa que vem atuando na prestação de serviços terceirizados
            em radiologia no estado do Paraná desde 2015 e em processos licitatórios pelo Brasil. </h3>
          <h3>A excelência de nossos serviços pode ser comprovada por mais de 8 anos de experiência no
            mercado da terceirização em serviços radiológicos e pelo atendimento oferecido por
            profissionais especializados e comprometidos para atender nossos clientes, oferecendo assim
            segurança e qualidade para o serviço.</h3>
          <h1>Quem são os nossos parceiros?</h1>
          <h3>
            Dentre nossos parceiros estão, a Irmandade da Santa Casa de Misericórdia de
            Curitiba, a AMIL do United Health Group , Centro de Diagnóstico Capão Raso, Clínica Dr.
            Mantovani na cidade de Fazenda Rio Grande, FEAS - Fundação Estatal de Atenção à
            Saúde de Curitiba, entre outros no interior do Estado Do Paraná, que podem atestar a
            satisfação e o sucesso da nossa parceria</h3>
          <h2>CASO QUEIRA CONHECER MELHOR SOBRE NOSSOS SERVIÇOS E
            SOLICITAR UM ORÇAMENTO, NOS ENVIE UM E-MAIL PARA <span>digital.rad@outlook.com</span></h2>
        </div>
        <img className={styles.quemimagem} src={imagem} alt="imagem de radiologia"></img>
      </div>
    </section>
  )
}

/* {
  
  
  */