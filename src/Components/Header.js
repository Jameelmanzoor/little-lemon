import React from 'react';
import Logo from "../Assets/Logo.svg"
function Header() {
  return (
    <header>
      <img
        src={Logo}
        alt="This is Little Lemon Restaurant Logo"
        height="150"
        width="370"/>
    </header>
  )
}

export default Header;