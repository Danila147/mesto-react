import React from 'react';
import logo from '../images/header-logo.svg';

function Header() {
  return (
    <header className='header header-position'>
      <img src={logo} alt='логотип место' className='header__logo' />
    </header>
  );
}

export default Header;
