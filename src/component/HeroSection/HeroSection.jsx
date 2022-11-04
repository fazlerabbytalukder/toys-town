import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const HeroSection = ({ myTitle }) => {
    const {title} = myTitle;
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h1>{title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus, amet consequatur fugit possimus corrupti sapiente porro quis. Corrupti, aliquid?</p>
                    <Button variant='primary'>Shop Now</Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <h1>image</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;