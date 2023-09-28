import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const ItemListContainer = (props) => {

    var [products, setProducts] = useState([]);

    const getProducts = () => {

        fetch(`https://fakestoreapi.com/products/category/${props.productType}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log("Error al obtener los datos:" + error))
    }

    useEffect(() => {
        getProducts();

    }, [props.productType]);



    return (
        <>
            <h4 style={{ textAlign: "center", color: "gray" }}>{props.greeting}</h4>
            {products.map((item) => {
                return <ItemCard key={item.id} id={item.id} nombre={item.title} imagen={item.image}></ItemCard>
            })}
        </>

    )
}
export default ItemListContainer

