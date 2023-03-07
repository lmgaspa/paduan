import React from 'react'
import styles from '../layouts/servicos.module.css'
import foto1 from '../../src/image/foto2.jpg'
import slogan from '../../src/image/slogan.jpeg'
import icon1 from '../../src/image/icone1.png'
import icon2 from '../../src/image/icone2.png'
import icon3 from '../../src/image/icone3.png'
import icon4 from '../../src/image/icone4.png'
import icon5 from '../../src/image/icone5.png'
import icon6 from '../../src/image/icone6.png'
import terc from '../../src/image/terceirizacao.png'


export default function Servicos() {
  return (
    <section>
      <div className={styles.box}>
        <img src={slogan} alt="foto"></img>
      </div>
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
      <div>
        <img className={styles.invisivelterc} src={terc} alt="vantagens"></img>
      </div>
      <div className={styles.box2}>
        <h1>ALGUMAS VANTAGENS DA TERCEIRIZAÇÃO DE SERVIÇOS</h1>
        <table class={styles.table}>
          <tbody>
            <tr>
              <td>
                <img src={icon1} alt="Redução de Custos"></img>
                <h2>Redução de Custos</h2></td>
              <td>
                <img src={icon2} alt="Eliminação de vínculo trabalhista"></img>
                <h2>Eliminação de vínculo trabalhista</h2></td>
            </tr>
            <tr>
              <td>
                <img src={icon3} alt="Gerenciamento de mão de obra"></img>
                <h2>Gerenciamento de mão de obra</h2></td>
              <td>
                <img src={icon4} alt="Recrutamento e seleção de pessoa"></img>
                <h2>Recrutamento e seleção de pessoal</h2></td>
            </tr>
            <tr>
              <td>
                <img src={icon5} alt="Treinamento técnico comportamental"></img>
                <h2>Treinamento técnico comportamental</h2></td>
              <td>
                <img src={icon6} alt="Cobertura em caso de férias ou afastamento médico"></img>
                <h2>Cobertura em caso de férias ou afastamento médico</h2></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section >
  )
}