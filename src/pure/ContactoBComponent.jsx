import React from 'react'
import PropTypes from 'prop-types'

const ContactoBComponent = ({contacto}) => {

  return (
    <div>
        <h1>Contacto: {contacto.nombre} {contacto.apellido}</h1>
        <h2>Email: {contacto.email}</h2>
        <h3>Estado de conexión: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
    </div>
  )
}

ContactoBComponent.propTypes = {
    contacto: PropTypes.instanceOf(ContactoBComponent)
}

export default ContactoBComponent