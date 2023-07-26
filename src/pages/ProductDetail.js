import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const params = useParams();
    return (
        <>
            <h1>This is the Product Detail Page ..!!</h1>   
            <b>{params.productId}</b>
        </>
    );
}

export default ProductDetailPage;