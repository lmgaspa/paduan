import React from 'react'
import styles from '../layouts/footer.module.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

export default function footer() {
  return (
    <section className={styles.containerfooter}>
      <div className={styles.icons}>
        <IoLocationOutline />
        Endereço:
        <p>Rua Padre Estanislau Piasecki, 426, CIC- Curitiba/PR
        </p>
        </div>
        <div>
        <BsFillTelephoneFill /> Telefone:
        <p>(47)99959-6195</p>
        </div>
        <div>
        <AiOutlineMail /> Email<p>contato@digitalrad.net.br</p>
      </div>
         </section>
  )
}

