import { useState } from 'react';
import InputMask from 'react-input-mask';

import styles from '../layouts/formfinalOrcamento.module.css'

function PhoneInput(props) {
  return (
    <InputMask className={styles.inputform}
      mask='(99) 99999-9999'
      placeholder='Digite o seu telefone' 
      value={props.value} 
      onChange={props.onChange}>
    </InputMask>
  );
}

function PhoneMaskBr() {
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);
    return (
      <div>
        <PhoneInput 
          value={phone}
          onChange={handleInput}>
        </PhoneInput>
      </div>
    );
  }

  export default PhoneMaskBr;