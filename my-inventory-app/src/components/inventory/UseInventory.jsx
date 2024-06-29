import { useState } from 'react';

const useInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 15 },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return { products, addProduct, removeProduct };
};

export default useInventory;