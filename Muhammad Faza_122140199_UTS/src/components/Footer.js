import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#f1f1f1', marginTop: '2rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Fake Store App</p>
    </footer>
  );
}

export default Footer;
