import React from 'react'
import styles from '../layouts/footer.module.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

export default function footer() {
  return (
    <section className={styles.containerfooter}>
      <div>
        <IoLocationOutline className={styles.icon1}/>
        Endereço:
        <p>Rua Padre Estanislau Piasecki, 426, CIC- Curitiba/PR
        </p>
        </div>
        <div>
        <BsFillTelephoneFill className={styles.icon2}/>Telefone:
        <p >(47)99934-2060</p>
        </div>
        <div>
        <AiOutlineMail className={styles.icon3}/>E-mail:<p>digital.rad@outlook.com</p>
      </div>
         </section>
  )
}

