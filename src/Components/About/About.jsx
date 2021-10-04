import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container>
            <h1 className="text-center py-3">About Us</h1>
            <p className="mx-5">International Islamic University Chittagong (IIUC) is one of the top graded government approved private universities in Bangladesh. Having fulfilled the requirements as laid down in the Private University Act of 1992, and after obtaining the necessary clearance from the University Grants Commission (UGC), and the permission of Government of Bangladesh (GOB) through the Ministry of Education, International Islamic University Chittagong (IIUC) started functioning on February 11 1995. The credit for the idea of establishing this University goes to International Islamic University Chittagong Trust (IIUCT). IIUC framed its own Statues, Ordinances and Regulations governing the manifold activities of IIUC – academic, administrative, financial, student welfare, discipline etc. as per the Private University Act, 1992, 1998 and revised Act, 2010. Most statutory bodies formed under the provisions of the Act have since then been functioning.</p>

            <Row md={1} lg={2} className="g-5 py-5">
                <div className="">
                    <h2>Our Mission</h2>
                    <p>
                        Our Mission is to produce through the pursuit of education properly trained up manpower to contribute t socio-economic development and moral upliftment of the society and to cultivate in our students expertise as we as ethical sensitivity, intelligence and an ability to think independently beyond their areas of study, so that they can sustain justice in all walks of life.
                    </p>
                </div>

                <div className="">
                    <h2>Our Vision</h2>
                    <p>
                        Our Vision is to offer nationally competitive and internationally recognized opportunities for learning to make this University as the Centre of Excellence in different areas of scholarship, like Shari’ah and Islamic Studies, Business Studies, Social Science, Science & Engineering, Arts & Humanities, Law, and such other faculties that will be introduced in future. Its door is open to the admission seekers from all over the world, regardless of race, region and religion. This university cherished the dream of becoming one of the highest seat of learning and creator of knowledge in the South East Asia.
                    </p>
                </div>

            </Row>
        </Container>
    );
};

export default About;