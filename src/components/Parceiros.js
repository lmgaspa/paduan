import React from 'react'
import Amil from '../image/amil.png'
import Capao from '../image/logo_cd_capao_raso.png'
import Feas from '../image/feas.png'
import Santa from '../image/santacasacuritiba.png'
import styles from '../layouts/parceiros.module.css'

export default function Parceiros() {
    return (
        <secction>
            <h1 className={styles.textoParceiro}>Parceiros</h1>
            <div className={styles.containerparceiros}>
                <div className={styles.containersanta}>
                    <img src={Santa} alt="Santa Casa de Misericórdia de Curitiba"></img>
                </div>
                <div className={styles.containerfeas}>
                    <img src={Feas} alt="FEAES"></img>
                </div>
                <div className={styles.containercapao}>
                    <img src={Capao} alt="Centro de Diagnóstico Capão Raso"></img>
                </div>
                <div className={styles.containeramil}>
                    <img src={Amil} alt="Amil"></img>
                </div>
            </div>
        </secction>
    )
}
