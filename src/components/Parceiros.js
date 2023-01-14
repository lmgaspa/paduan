import React from 'react'
import Amil from '../image/amil.png'
import Capao from '../image/logo_cd_capao_raso.png'
import Feas from '../image/feas.png'
import Santa from '../image/santacasacuritiba.png'
import styles from '../layouts/parceiros.module.css'

export default function Parceiros() {
    return (
        <section>
            <div>
                <h1 className={styles.textoparceiros}>Parceiros</h1>
            </div>
            <div className={styles.containerparceiros}>
                <div>
                    <img src={Santa} alt="Santa Casa de Misericórdia de Curitiba"></img>
                </div>
                <div>
                    <img src={Feas} alt="FEAES"></img>
                </div>
                <div>
                    <img src={Capao} alt="Centro de Diagnóstico Capão Raso"></img>
                </div>
                <div>
                    <img src={Amil} alt="Amil"></img>
                </div>
            </div>
        </section>
    )
}
