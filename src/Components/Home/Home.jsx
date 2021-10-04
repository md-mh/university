import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Serviceitem from '../Serviceitem/Serviceitem';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicehome.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <Container>
                <Carousel className="p-3">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner-1.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner-2.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./banner-3.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container>
                <Row className="g-4 py-5 d-flex justify-content-center">
                    <div className="col-md-5"><h1 className="text-center py-3">Guidline <br /> from Principle</h1></div>
                    <div className="col-md-7">
                        <ul className="li">Commitment to Excellence in Education</ul>
                        <ul className="li">Commitment to Valuing People in All Aspects of Life</ul>
                        <ul className="li">Commitment to Being Student, Study & Client Focused</ul>
                        <ul className="li">Commitment to Quality & Global Educational Programs</ul>
                        <ul className="li">Commitment to Social and Financial Responsibility</ul>
                    </div>
                </Row>
            </Container>
            <Container>
                <h1 className="text-center py-3">Our Service</h1>
                <Row xs={1} md={2} lg={4} className="g-4 py-4">
                    {
                        services.map(service => <Serviceitem key={service.id} service={service}></Serviceitem>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;