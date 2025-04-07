import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function ProductDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  // Contoh penggunaan useMemo untuk menghitung harga diskon
  const discountedPrice = useMemo(() => {
    if (data) {
      return (data.price * 0.9).toFixed(2);
    }
    return null;
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Product not found</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{data.title}</h2>
      <img
        src={data.image}
        alt={data.title}
        style={{ width: '300px', height: '300px', objectFit: 'contain' }}
      />
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <p>Discounted Price (10% off): ${discountedPrice}</p>
    </div>
  );
}

export default ProductDetail;
