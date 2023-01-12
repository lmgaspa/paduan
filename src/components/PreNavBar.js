import React from 'react';
import styles from '../layouts/prenavbar.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function PreNavBar() {
  return (
    <div className={styles.prenavbar}>
      <div className={styles.prenavbaricons}>
      <BsFillTelephoneFill />
      <p>(47)99959-6195</p>
      <AiOutlineMail />
      <p>contato@digitalrad.net.br</p>
      </div>
    </div>
  )
}
