import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link>
      |
      <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  // backgroundColor: '#eee',
  marginBottom: '15px',
  paddingTop: '10px',
  textAlign: 'center',
}

const linkStyle = {
  padding: '10px',
  textDecoration: 'none'
}