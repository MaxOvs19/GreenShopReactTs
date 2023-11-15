import React from 'react';

import BaseButton from 'UI/BaseButton/BaseButton';

import vaseHead from 'assets/icons/vaseHead.svg';
import vase1 from 'assets/icons/vase1.svg';
import vase from 'assets/icons/vase.svg';
import teapot from 'assets/icons/teapot.svg';
import calling from 'assets/icons/CallingFooter.svg';
import location from 'assets/icons/LocationFooter.svg';
import message from 'assets/icons/MessageFooter.svg';
import logo from 'assets/icons/Logo.svg';
import fb from 'assets/icons/facebook.svg';
import insta from 'assets/icons/Instagram.svg';
import twitter from 'assets/icons/Twitter.svg';
import linkedin from 'assets/icons/Linkedin.svg';
import union from 'assets/icons/Union.svg';
import payMethods from 'assets/icons/payMethods.png';

import './footer.scss';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-top__item">
            <div className="image-box">
              <img src={vaseHead} alt="@" className="head-vase" />
              <img src={vase1} alt="@" />
            </div>
            <h4>Garden Care</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="footer-top__item">
            <div className="image-box">
              <img src={vase} alt="@" />
            </div>
            <h4>Plant Renovation</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="footer-top__item">
            <div className="image-box">
              <img src={teapot} alt="@" />
            </div>
            <h4>Watering Graden</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="footer-top__item">
            <h4>Would you like to join newsletters?</h4>

            <div className="input-code">
              <div className="input-code__box">
                <input type="text" placeholder="enter your email address..." name="coupon_code" />
              </div>

              <BaseButton styles="submit-code">Join</BaseButton>
            </div>
            <p>
              We usually post offers and challenges in newsletter. We’re your online houseplant
              destination. We offer a wide range of houseplants and accessories shipped directly
              from our (green)house to yours!
            </p>
          </div>
        </div>
        <div className="footer-midl">
          <img src={logo} alt="@" />
          <div className="footer-midl__item">
            <img src={location} alt="@" />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className="footer-midl__item">
            <img src={message} alt="@" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="footer-midl__item">
            <img src={calling} alt="@" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__item">
            <h4>My Account</h4>
            <ul>
              <li>My Account</li>
              <li>Our stores</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Specials</li>
            </ul>
          </div>
          <div className="footer-bottom__item">
            <h4>Help & Guide</h4>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Shipping & Delivery</li>
              <li>Product Policy</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div className="footer-bottom__item">
            <h4>Categories</h4>
            <ul>
              <li>House Plants</li>
              <li>Potter Plants</li>
              <li>Seeds</li>
              <li>Small Plants</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="footer-bottom__item">
            <h4>Social Media</h4>
            <div>
              <img src={fb} alt="@" />
              <img src={insta} alt="@" />
              <img src={twitter} alt="@" />
              <img src={linkedin} alt="@" />
              <img src={union} alt="@" />
            </div>
            <h4>We accept</h4>
            <img src={payMethods} alt="@" />
          </div>
        </div>
      </footer>
      <span className="span-footer">© 2021 GreenShop. All Rights Reserved.</span>
    </>
  );
};

export default Footer;
