import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Servicelist.css'

const Servicelist = (props) => {
    const { title, img, description } = props.service;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text>{description.slice(0, 200)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Servicelist;