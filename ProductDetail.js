import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Here you can fetch the product details by id from the backend if needed.
  
  return (
    <div>
      <h1>Product Details for {id}</h1>
      {/* Display more details of the product */}
    </div>
  );
};

export default ProductDetail;
