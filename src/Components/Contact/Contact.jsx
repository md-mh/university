/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import './Contact.css'

const Contact = () => (
    // contact us page container 
    <Container>
        {/* Bootstrap responsive contact form  */}
        <h1 className="text-center py-3">Contact Us</h1>
        <Row md={1} lg={2} className="g-5 py-5">

            <Form>
                <h2>Email Us</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Label>Textarea</Form.Label>
                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '150px' }} />
                </FloatingLabel>
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>

            {/* Google map iframe  */}
            <div>
                <h2>Google Map Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11808.089899535385!2d-83.7382241!3d42.2780436!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ba14e5178e997e3!2sUniversity%20of%20Michigan!5e0!3m2!1sen!2sbd!4v1633350775451!5m2!1sen!2sbd" width="100%" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>

        </Row>
    </Container>


);

export default Contact;