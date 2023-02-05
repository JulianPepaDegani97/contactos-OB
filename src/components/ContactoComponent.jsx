import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/Contacto.class'
import ContactoBComponent from '../pure/ContactoBComponent';
import ContactoForm from './form/ContactoForm';

const ContactoComponent = props => {
  const defaultContact = new Contacto(1, 'Julián', 'Pepa Degani', 'julianpepadegani97@gmail.com', true);
  const [contacts, setContacts] = useState([defaultContact]);

  const addContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }
  
  const deleteContact = (id) => {
    const tempContacts = contacts.filter(contact => contact.id !== id);
    setContacts(tempContacts);
  }

  return (
    <div className='display-flex col-12 p-3 justify-center aling-items-center'>
      <table className='table'>
      <thead className='table-dark'>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      
      <ContactoBComponent contacts={contacts} deleteContact={deleteContact} />
      
        
    </table>
        <ContactoForm add={addContact} />
    </div>
  )
}

ContactoComponent.propTypes = {}

export default ContactoComponent;