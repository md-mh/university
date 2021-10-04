import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Serviceitem from '../Serviceitem/Serviceitem';
import './Services.css'

const Services = () => {

    // collect data from useatate 
    const [services, setServices] = useState([]);

    // Take data using useeffect with fetch
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        // Service page container
        <Container>
            <h1 className="text-center py-3">Our Service</h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={4} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <Serviceitem key={service.id} service={service}></Serviceitem>)
                }
            </Row>
        </Container>

    );
};

export default Services;