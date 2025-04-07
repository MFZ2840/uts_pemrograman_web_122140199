import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p>Halaman yang kamu cari tidak ditemukan.</p>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}

export default NotFound;
