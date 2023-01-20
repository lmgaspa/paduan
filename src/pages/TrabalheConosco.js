import React from 'react'
import PreNavBar from '../components/PreNavBar'
import Navbar from '../components/Navbar'
import styles from '../layouts/layoutpages/trabalhe.module.css'
import trabalhe from '../image/trabalhe.jpeg'

export default function TrabalheConosco() {
  return (
    <section>
      <PreNavBar />
      <Navbar />
      <div className={styles.containertrabalhe}>
        <h1>Quer trabalhar com a gente?</h1>
        <div>
          <h3>Caso queira trabalhar com a nossa equipe, envie um e-mail para <span>digital.rad@outlook.com</span></h3>
          <h3>anexando o seu currículo em formato .pdf</h3>
        </div>
      </div>
      <div>
        <img className={styles.trabimage} src={trabalhe} alt="mulher oferecendo trabalho"></img>
      </div>
    </section>
  )
}
