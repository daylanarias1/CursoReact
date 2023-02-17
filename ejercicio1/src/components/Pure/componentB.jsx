import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contacto.class';

const ComponentB = ({ contact }) => {

    const [connected, setConnected] = useState(contact.connected);

    const handleConnectedChange = () => {
        setConnected(!connected);
        contact.connected = !connected;
    };

    return (
        <div>
            <h2>
                Nombre: {contact.name}
            </h2>
            <h2>
                Apellido: {contact.lastName}
            </h2>
            <h2>
                Email: {contact.email}
            </h2>
            <button onClick={handleConnectedChange}>
                Cambiar estado de conexión
            </button>
            <h5>
                This contact is: {contact.connected ? 'Contact Online' : 'Contact Unavailable'}
            </h5>
        </div>
    );
};

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentB;
