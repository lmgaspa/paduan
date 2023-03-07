import React from 'react'
import PreNavBar from '../components/PreNavBar'
import Navbar from '../components/Navbar'
import styles from '../layouts/layoutpages/servicospage.module.css'
import foto1 from '../../src/image/foto3.jpg'

export default function ServicosPage() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.divservicospage}>
        <div className={styles.divleft}>
          <h1>Nossos serviços</h1>
          <h3>Nós somos uma empresa especializada em terceirização de serviços radiológicos e
            oferecemos uma equipe altamente capacitada e atualizada com as mais recentes tecnologias do mercado.
          </h3>
          <h3>
            Com nossos serviços, você pode otimizar a gestão do centro de imagem e garantir que todos os laudos sejam precisos e rápidos.</h3>
          <h1>Vantagens da terceirizacao</h1>
          <h3>Ao escolher a nossa empresa, você pode se concentrar no seu core business, deixando a gestão dos serviços radiológicos para
            uma equipe especializada. Além disso, nossa equipe técnica devidamente capacitada aumenta a eficiência do atendimento aos pacientes e
            reduz os custos.</h3>
          <h3>Outra grande vantagem é a emissão de laudos através da telerradiologia,
            permitindo que pacientes de diversas regiões recebam diagnósticos precisos e rápidos.</h3>
          <h3>Se você deseja terceirizar serviços em radiologia com qualidade e segurança,
            nossa empresa é uma excelente opção.</h3>
          
        </div>
        <div className={styles.divright}>
        <img src={foto1} alt="foto"></img>
        </div>
      </div>
    </section>
  )
}