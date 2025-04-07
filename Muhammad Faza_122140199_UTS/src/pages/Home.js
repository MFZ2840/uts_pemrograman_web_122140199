import React, { useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

function Home() {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!data) return [];
    return data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Products</h2>
      <SearchBar onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Home;
