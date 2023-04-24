import React from 'react'
import Amil from '../image/amil.png'
import Capao from '../image/logo_cd_capao_raso.png'
import Feas from '../image/feas.png'
import Santa from '../image/santacasa.png'
import nova from '../image/novacli.jpeg'
import styles from '../layouts/parceiros.module.css'

export default function Parceiros() {
    return (
        <section>
            <div>
                <h1 className={styles.textoparceiros}>Parceiros</h1>
            </div>
            <div className={styles.containerparceiros}>
                <img src={Santa} alt="Santa Casa de Misericórdia de Curitiba"></img>
                <img src={Capao} alt="Centro de Diagnóstico Capão Raso"></img>
                <img src={nova} alt="Clínica Dr. Mantovani"></img>
                <img src={Amil} alt="Amil"></img>
                <img src={Feas} alt="FEAS"></img>
            </div>
        </section>
    )
}
