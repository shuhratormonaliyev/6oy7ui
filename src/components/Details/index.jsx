import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './details.module.css';

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`https://cars-pagination.onrender.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className='wrapper'>
      <button onClick={() => navigate('/')}>Home ga qaytish!</button>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default Details;
