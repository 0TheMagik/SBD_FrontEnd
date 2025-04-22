import React from 'react';
import '../styles/Header.css';

function Header({ logo }) {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo Netlab" className="logo" />
        <div className="header-text">
          <h1>Praktikum Netlab</h1>
          <p className="subtitle">Semester Genap 2024/2025</p>
        </div>
      </div>
    </header>
  );
}

export default Header;