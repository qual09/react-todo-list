import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={{ marginBottom: '5px' }}>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link>
      |
      <Link style={linkStyle} to="/about">About</Link>
    </header >
  )
}

const headerStyle = {
  // backgroundColor: '#eee',
  padding: '10px 0 15px 0',
  textAlign: 'center',
}

const linkStyle = {
  padding: '10px',
  textDecoration: 'none'
}