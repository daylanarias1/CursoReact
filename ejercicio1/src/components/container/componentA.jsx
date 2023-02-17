import React from 'react';
import { Contact } from '../../models/contacto.class';
import ComponentB from '../Pure/componentB';


const ComponentA = () => {

    const defaultContact = new Contact('Daylan', 'Arias', 'Email', false);

    return (
        <div>
            <h1>Hola</h1>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );

};

ComponentA.propTypes = {

};


export default ComponentA;
