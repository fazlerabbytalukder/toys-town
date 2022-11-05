import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useProductContext } from '../../context/productcontext';
import Product from '../Product/Product';

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts);
    return (
        <Container>
            {
                isLoading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    featureProducts.map(curElem => {
                        return <Product
                            key={curElem.id}
                            curElem={curElem}
                        />
                    })
                }
            </Row>
        </Container>
    );
};

export default FeatureProducts;