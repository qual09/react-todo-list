import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      &copy; 2020 Hieu CPX. All rights reserved.
    </footer>
  )
}

const footerStyle = {
  color: '#999',
  fontSize: '0.8em',
  marginTop: '20px',
  textAlign: 'center',
}