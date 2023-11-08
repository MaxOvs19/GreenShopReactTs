import React from 'react';

import { Link } from 'react-router-dom';
import { getProductInBasket } from 'modules/SelectedProducts/store/basketSlise';
import { useSelector } from 'react-redux';

import logo from 'assets/icons/Logo.svg';
import basket from 'assets/icons/basket.svg';
import loupe from 'assets/icons/loupe.svg';
import logout from 'assets/icons/Logout.svg';
import BaseButton from 'UI/BaseButton/BaseButton';

import './header.scss';

const Header = () => {
  const products = useSelector(getProductInBasket);

  return (
    <header className="header">
      <img src={logo} alt="#" />
      <nav className="header__nav">
        <Link to={'/'}>
          <p>Home</p>
        </Link>

        <p>Shop</p>
        <p>Plant Care</p>
        <p>Blogs</p>
      </nav>

      <div className="header__login">
        <img src={loupe} alt="@" />
        <div className="header__basket">
          <Link to={'/basket'}>
            <img src={basket} alt="@" />
          </Link>
          <div className="header__basket-count">{products.length}</div>
        </div>

        <BaseButton styles="header__login-button">
          <img src={logout} alt="@" />
          Login
        </BaseButton>
      </div>
    </header>
  );
};

export default Header;
