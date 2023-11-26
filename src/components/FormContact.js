import React, {useRef, useState} from 'react';
import * as emailjs from "@emailjs/browser";


const FormContact = () => {
    const form = useRef();
    const [succes,setSucces] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_r6aib29','template_9qa7quq',form.current,'F2-p5HidDbmMHcoxh')
            .then((result) => {
                console.log(result.text);
                setSucces(true);
            }, (error) => {
                console.log(error.text);
                setSucces(false);
            });
    }

    return (
        <div className="formContact">
            <h1>Me contacter</h1>

            <form ref={form} onSubmit={handleSubmit}>

                <input type="text" name="nom" placeholder="Nom" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <textarea name="message" placeholder="contenu du message" required></textarea>
                <button type="submit" name="envoyer">Envoyer {succes && " / envoyé avec succès"}</button>
            </form>

        </div>
    );
};

export default FormContact;
