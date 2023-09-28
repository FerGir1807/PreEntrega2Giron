import React, { useState, useEffect } from 'react';
import ItemCard from '../item/ItemCard';

const Home = () => {
    var [products, setProducts] = useState([]);

    const getProducts = () => {

        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log("Error al obtener los datos:" + error))
    }

    useEffect(() => {
        getProducts();

    }, []);

    return (
        <>
            <h4 style={{ textAlign: "center", color: "gray" }}>Bienvenido a nuestra tienda</h4>
            {products.map((item) => {
                return <ItemCard key={item.id} id={item.id} nombre={item.title} imagen={item.image}></ItemCard>
            })}
        </>
    )
}

export default Home