import React, { useState } from "react";
import styles from '../layouts/formOrcamento.module.css'

function FormOrcamento() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState ('')
    const [message, setMessage] = useState('')
  
    return (
      <div className={styles.containerform}>
  
        <form className={styles.form} onSubmit={() => {}}>
          <input 
            className={styles.inputform}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className={styles.inputform}
            type="text"
            placeholder="Digite seu telefone"
            onChange={(e) => setTelefone(e.target.value)}
            value={telefone}
          />

          <input 
            className={styles.inputform}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  
          <textarea 
            className={styles.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
  
          <input className={styles.buttonform} type="submit" value="Enviar" />
        </form>
  
      </div>
    );
  }

  export default FormOrcamento