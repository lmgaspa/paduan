import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import styles from '../layouts/formfinalOrcamento.module.css'

const FormOrcamento = () => {

  const handleSubmit = (values, { setSubmitting }) => {
    const templateParams = {
      from_name: values.fullname,
      telefone: phoneNumber,
      message: values.message,
      email: values.email
    }
    emailjs.send("service_20wtbom", "template_647ai28", templateParams, "YsaVbURiIy4wRrTsR")
      .then(() => {
        setSubmitting(false);
        alert('Mensagem enviada com sucesso!');
      })
      .catch(() => {
        setSubmitting(false);
        alert('Ocorreu um erro ao enviar a mensagem.');
      });
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Nome muito curto')
      .max(255, 'Nome muito longo')
      .required('Nome é obrigatório'),
    email: Yup.string()
      .email('Endereço de e-mail inválido')
      .required('E-mail é obrigatório'),
    message: Yup.string()
      .min(10, 'Mensagem muito curta')
      .required('Mensagem é obrigatória'),
  });

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      const formattedPhoneNumber = '(' + match[1] + ') ' + match[2] + '-' + match[3];
      setPhoneNumber(formattedPhoneNumber);
    } else {
      setPhoneNumber(value);
    }
  };

  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        telefone: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.containerform}>
          <div>
            <Field type="text" name="fullname" id="fullname" className={styles.inputform}
              placeholder="Digite o seu nome" />
            <ErrorMessage className={styles.erro} name="fullname" component="div" />
          </div>
          <div>
            <Field type="email" name="email" id="email" className={styles.inputform}
              placeholder="Digite o seu e-mail" />
            <ErrorMessage className={styles.erro} name="email" component="div" />
          </div>
          <div>
            <Field type="telephone" name="telefone" id="telefone" className={styles.inputform}
              placeholder="Digite o seu telefone"
              value={phoneNumber}
              onChange={handleChange}
            />
            <ErrorMessage className={styles.erro} name="telefone" component="div" />
          </div>
          <div>
            <Field as="textarea" name="message" id="message"
              placeholder="Digite a sua mensagem"
              className={styles.textarea} />
            <ErrorMessage className={styles.erro} name="message" component="div" />
          </div>
          <button className={styles.buttonform} type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormOrcamento