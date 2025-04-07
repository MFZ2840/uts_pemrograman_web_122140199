import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product }) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/product/${product.id}`);
  }, [navigate, product.id]);

  return (
    <div 
      onClick={handleClick}
      style={{
        border: '1px solid #ddd',
        padding: '1rem',
        margin: '1rem',
        width: '200px',
        cursor: 'pointer',
        borderRadius: '8px',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'contain' }}
      />
      <h3 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
