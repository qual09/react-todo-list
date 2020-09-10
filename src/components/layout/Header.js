import React from 'react';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  )
}

const headerStyle = {
  // backgroundColor: '#eee',
  marginBottom: '15px',
  paddingTop: '10px',
  textAlign: 'center',
}