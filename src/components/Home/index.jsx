import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './index.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      const url = selectedCategory
        ? `https://cars-pagination.onrender.com/products/category?category=${selectedCategory}`
        : 'https://cars-pagination.onrender.com/products';
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
   
    try {
      const response = await axios.get('https://cars-pagination.onrender.com/products/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className={styles.cards}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <Link to={`/details/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
