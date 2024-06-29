import React from 'react';
import ProductList from './components/inventory/ProductList';
import NewProductForm from './components/inventory/NewProductForm';

function App() {
  return (
    <div className="App">
      <ProductList />
      <NewProductForm />
    </div>
  );
}

export default App;