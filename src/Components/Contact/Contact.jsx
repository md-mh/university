/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';
import './Contact.css'

const Contact = () => (
    <Container>
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

            <div className="">
                <h2>Google Map Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14612.57529319585!2d90.43626032266361!3d23.70655748868884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1633340317753!5m2!1sen!2sbd" width="100%" height="350" style={{ border: 0 }}
                    allowfullscreen="" loading="lazy"></iframe>
            </div>

        </Row>
    </Container>


);

export default Contact;