import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef(null); // 👈 useRef

  useEffect(() => {
    inputRef.current.focus(); // 👈 fokus ke input saat pertama kali render
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    onSearch(value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search product..."
      value={keyword}
      onChange={handleChange}
      style={{ padding: '8px', marginBottom: '16px', width: '100%' }}
    />
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
