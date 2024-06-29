import React, { useState } from 'react';
import useInventory from './UseInventory';

const NewProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const { addProduct } = useInventory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 1000), // Generate random ID (for demo purposes)
      name: productName,
      price: parseFloat(productPrice),
    };
    addProduct(newProduct);
    setProductName('');
    setProductPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </label>
      <label>
        Product Price:
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          step="0.01"
          required
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProductForm;