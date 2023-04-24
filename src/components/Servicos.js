import React from 'react'
import styles from '../layouts/servicos.module.css'
import foto1 from '../../src/image/foto3.jpg'
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
        <h1>Terceirização de serviços</h1>
          <h3>Você está precisando de uma solução imediata e eficaz para solucionar alguns problemas e
            reduzir custos com mão de obra técnica em seu serviço de radiologia?</h3>
          <h3>
            A Digital Radiológica é uma empresa que vem atuando na prestação de serviços terceirizados
            em radiologia no estado do Paraná desde 2015 e em processos licitatórios pelo Brasil.</h3>
            <h3> A excelência
            de nossos serviços pode ser comprovada por mais de 8 anos de experiência no mercado da
            terceirização em serviços radiológicos e pelo atendimento oferecido por profissionais especializados
            e comprometidos para atender nossos clientes, oferecendo assim segurança e qualidade para o
            serviço.</h3>
          <h3>
            Dentre nossos parceiros estão a Irmandade da Santa Casa de Misericórdia Nossa Senhora Das
            Graças - Piên, Clínica de Diagnóstico Capão Raso, Clínica Dr. Mantovani na cidade de Fazenda Rio
            Grande, Fundação Estatal de Atenção à Saúde de Curitiba - FEAS, entre outros no interior do Estado
            Do Paraná.</h3>
          <h3>
            Além de mão de obra especializada, contamos com o serviço de telerradiologia que permite o
            diagnóstico à distância, emitindo, portanto, uma segunda opinião técnica através do envio digital das
            imagens.</h3>
          <h3>
            Ao escolher a nossa empresa, você pode se concentrar no seu core business, confiando a gestão
            do seu centro de imagem para um time especializado e uma equipe técnica experiente, devidamente
            treinada e que preza pela a humanização ao atendimento aos seus clientes.</h3>
          <h3>A terceirização do trabalho do profissional em radiologia, é hoje uma realidade de mercado que
            vem se disseminando principalmente nos grandes centros.</h3>
          <h3>Para hospitais e proprietários de clínicas,
            é uma solução referente às questões trabalhistas que envolve a contratação de pessoal técnico, na
            medida que desvincula o profissional do serviço radiológico de sua instituição, podendo contribuir
            também na redução de diversos custos altos e fixos.</h3>
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