import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser'

function FormUploadPDF() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            alert('Por favor, selecione um arquivo PDF válido.');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert('Por favor, selecione um arquivo PDF antes de enviar.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            // upload the file to your server
            const res = await axios.post('/upload', formData);

            // send the email with the attached file
            emailjs.send('service_20wtbom', 'template_647ai28', {
                to_email: 'luhmgasparetto@gmail.com',
                attachment: res.data.fileUrl
            });
            alert('O arquivo foi enviado com sucesso.');
        } catch (err) {
            console.log(err);
            alert('Ocorreu um erro ao enviar o arquivo.');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
}

export default FormUploadPDF