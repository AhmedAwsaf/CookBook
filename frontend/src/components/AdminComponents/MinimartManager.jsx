// src/pages/MinimartManager.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const MinimartManager = () => {
  const apiStart = "http://localhost:5001";
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');  // State for search term

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiStart}/api/minimart/products`,{
        headers: { Authorization: `Bearer ${localStorage.getItem('loginToken')}` }
      });
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSave = async (productData) => {
    try {
      if (selectedProduct) {
        await axios.put(`${apiStart}/api/minimart/products/${selectedProduct._id}`, productData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('loginToken')}` }
          });
      } else {
        await axios.post(`${apiStart}/api/minimart/products`, productData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('loginToken')}` }
          });
      }
      fetchProducts();
      setShowForm(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${apiStart}/api/minimart/products/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('loginToken')}` }
          });
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleCloseForm = () => {
    setSelectedProduct(null);
    setShowForm(false);
  };

  // Filter products based on search term
  const filteredProducts = products.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl mb-6">Minimart Manager</h1>
      <button
        onClick={() => setShowForm(true)}
        className="mb-6 inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
      >
        Add New Product
      </button>
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          className="border rounded-lg px-4 py-2 w-full"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ProductList products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && (
        <ProductForm product={selectedProduct} onSave={handleSave} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default MinimartManager;
