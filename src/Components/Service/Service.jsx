import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Servicelist from '../Servicelist/Servicelist';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (

        <Container>
            <h1 className="text-center py-3">Our Service</h1>
            <Row xs={1} md={2} lg={4} className="g-4 py-4">
                {
                    services.map(service => <Servicelist key={service.id} service={service}></Servicelist>)
                }
            </Row>
        </Container>

    );
};

export default Service;