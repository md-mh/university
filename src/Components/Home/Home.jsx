import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Container>
                <Carousel className="p-3">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://news.stanford.edu/news/2012/may/images/senate_news.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Home;