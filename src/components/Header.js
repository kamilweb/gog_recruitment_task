import React from "react";
import Cart from "./Cart";
const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="logo" src="images/logo.svg" alt="GOG.COM" />
        <Cart />
      </div>
    </header>
  );
};
export default Header;
