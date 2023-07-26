import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS =[
    {id: 'pr1', name: 'Product 1'},
    {id: 'pr2', name: 'Product 2'},
    {id: 'pr3', name: 'Product 3'},
];

const ProductsPage = () => {
    return (
        <>
            <h1>This is the Products Page ..!!</h1>
            {PRODUCTS.map((product) => {
                return <li><Link to={`/products/${product.id}`}>{product.name}</Link></li>
            })} 
        </>
    )
}

export default ProductsPage;