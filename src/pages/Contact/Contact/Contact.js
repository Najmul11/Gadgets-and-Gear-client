import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Form from '../Form/Form';
import Map from '../Map/Map';

const Contact = () => {
    useTitle('Contact')
    return (
        <div>
           <Map/>
           <Form/>
        </div>
    );
};

export default Contact;