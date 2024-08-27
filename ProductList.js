import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getProducts } from '../api';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [company, category, top, minPrice, maxPrice]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getProducts(company, category, top, minPrice, maxPrice);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  return (
    <div className="product-list-container">
      <h1>Top Products from {company}</h1>
      <div className="filters">
        <select value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="AMZ">Amazon</option>
          <option value="FLP">Flipkart</option>
          <option value="SNP">Snapdeal</option>
          <option value="MYN">Myntra</option>
          <option value="AZO">Azo</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="TV">TV</option>
          {/* Add more categories here */}
        </select>

        <input
          type="number"
          value={top}
          onChange={(e) => setTop(e.target.value)}
          placeholder="Top N"
        />
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price"
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={`https://picsum.photos/200?random=${index}`}
              alt={product.productName}
            />
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
