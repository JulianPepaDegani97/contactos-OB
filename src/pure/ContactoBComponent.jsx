import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const contactoBComponent = ({contacts, deleteContact}) => {

  return (
    <tbody>
     
        {contacts.map((contact, index) => (        
          <tr key={index}>
            <td>{contact.nombre} {contact.apellido}</td>
            <td>{contact.email}</td>
            <td>{contact.conectado ? <i className="bi bi-lightbulb-fill" style={{color: 'green'}}></i> :
            <i className="bi bi-lightbulb-off"  style={{color: 'red'}}></i>}</td>
            <td>
              <span>
              {<i className='bi-trash task-action' onClick={() => deleteContact(contact.id)} style={{color: 'tomato'}}></i>}
              </span>
            </td>
          </tr>
        ))}
      
        
    </tbody>
  )
}

contactoBComponent.propTypes = {
    //contacts: PropTypes.instanceOf(contactoBComponent),
}

export default contactoBComponent