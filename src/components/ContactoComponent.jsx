import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'
import ContactoBComponent from '../pure/ContactoBComponent';

const ContactoComponent = props => {
    const defaultContact = new Contacto('Julián', 'Pepa Degani', 'julianpepadegani97@gmail.com', true);

  return (
    <div>
        <ContactoBComponent contacto={defaultContact} />
    </div>
  )
}

ContactoComponent.propTypes = {}

export default ContactoComponent