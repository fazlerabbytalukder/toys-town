import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ curElem }) => {
    const { id, name, image, price, category } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`} className="text-white text-decoration-none">
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} className='w-50' />
                    <Card.Body>
                        <Card.Title className='text-black'>{name}</Card.Title>
                        <Card.Text>
                            <p className='text-black'>Price: {price}</p>
                            <p className='text-black'>Category: {category}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </NavLink>
    );
};

export default Product;