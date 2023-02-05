import React, { useRef } from 'react'
import { Contacto } from '../../models/Contacto.class';
import { v4 as uuid } from 'uuid';

const ContactoForm = ({add}) => {

    const id = uuid();
    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    const addContact = (e) => {
        e.preventDefault();
        const newContact = new Contacto(id ,nombreRef.current.value, apellidoRef.current.value, emailRef.current.value, false);
        add(newContact);
        nombreRef.current.value = '';
        apellidoRef.current.value = '';
        emailRef.current.value = '';
    }
    
  return (
    <form onSubmit={addContact}>
        <input type='text' placeholder='Name' ref={nombreRef} />
        <input type='text' placeholder='Last name' ref={apellidoRef} />
        <input type='text' placeholder='email' ref={emailRef} />
        <button type='submit'>Add contact</button>
    </form>
  )
}

export default ContactoForm