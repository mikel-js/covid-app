import React from 'react';
import './Header.css'


function Header() {
  return (
    <header>
    <img src={require('./images/virus.jpg')} />
    <h3>WIN AGAINST COVID-19</h3>
    </header>
  );
}

export default Header;
