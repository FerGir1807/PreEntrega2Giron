import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


export const ItemDetail = () => {

    const { productId } = useParams();
    const [product] = useFetch(`https://fakestoreapi.com/products/${productId}`);

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={6} md={4}>
                    <h2>
                        {product.title}
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={4}>
                    <Image src={product.image} fluid />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6} md={4}>
                    <p>
                        {product.description}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
