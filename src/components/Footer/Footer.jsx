import React from 'react';
import newsLetter from '../../assets/images/newsletter.png';
import { Link } from 'react-router-dom';
import {
  BsTwitter,
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsYoutube,
  BsGooglePlay,
  BsApple,
} from 'react-icons/bs';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDinersClub,
  FaCcDiscover,
} from 'react-icons/fa';
import './footer.css';
const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="row text-align-center justify-content-between">
            <div className="col-5 d-flex">
              <div className="d-flex align-items-center">
                <img src={newsLetter} height="25px" alt="" />
                <h3 className="text-white mb-0 ms-1">Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex py-1 px-1 rounded bg-light ">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="b-none w-100 ps-2"
                />
                <span className="bg-light-dark py-2 rounded px-3 pointer">
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h6 className="pb-4">Contact Us</h6>
              <address className="fw-light">
                Demo Store <br />
                No. 1259 Freedom, New York , 1111 <br />
                United States
              </address>
              <p className="fw-light">
                Hotline: <a href="tel: +92 313 0159250">+92 313 0159250</a>
              </p>

              <p className="fw-light">
                <a href="mailto:shoaibnaseer1111@gmail.com">
                  shoaibnaseer1111@gmail.com
                </a>
              </p>

              <div className="icons-container d-flex">
                <div className="icon">
                  <BsTwitter />
                </div>
                <div className="icon">
                  <BsFacebook />
                </div>
                <div className="icon">
                  <BsPinterest />
                </div>
                <div className="icon">
                  <BsInstagram />
                </div>
                <div className="icon">
                  <BsYoutube />
                </div>
              </div>
            </div>
            <div className="col-2">
              <h6 className="pb-4">Information</h6>
              <ul className="footer-ul fw-light">
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Refund Policy</Link>
                </li>
                <li>
                  <Link>Shipping Policy</Link>
                </li>
                <li>
                  <Link>Terms of Service</Link>
                </li>
                <li>
                  <Link>Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className="pb-4">Account</h6>
              <ul className="footer-ul fw-light">
                <li>
                  <Link>Search</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>FAQ</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link>Size Chart</Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className="pb-4">Quick Links</h6>
              <ul className="footer-ul fw-light">
                <li>
                  <Link>Accessories</Link>
                </li>
                <li>
                  <Link>Laptops</Link>
                </li>
                <li>
                  <Link>Headphones</Link>
                </li>
                <li>
                  <Link>Smart Watches</Link>
                </li>
                <li>
                  <Link>Tablets</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h6 className="pb-4">Our App</h6>
              <p className="fw-light">
                Download Our App and get extra 15% Discount on your first
                Order...!
              </p>

              <div className="buttons-container d-flex">
                <div className="btn bg-light d-flex align-items-center me-2 w-50">
                  <div>
                    <BsGooglePlay className="btn-icon" />
                  </div>
                  <div className="btn-text-container text-start ps-2">
                    <div className="text-align-left">Get it on</div>
                    <div className="fw-bold"> Google Play</div>
                  </div>
                </div>
                <div className="btn bg-light d-flex align-items-center me-2 w-50">
                  <div>
                    <BsApple className="btn-icon" />
                  </div>
                  <div className="btn-text-container text-start ps-2">
                    <div className="text-align-left">Get it on</div>
                    <div className="fw-bold"> Apple Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
      <footer className="py-4">
        <div className="container ">
          <div className="row ">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered By Shoaib
              </p>

              <div className="cards-container">
                <FaCcVisa className="payment-card" />
                <FaCcMastercard className="payment-card" />
                <FaCcAmex className="payment-card" />
                <FaCcDinersClub className="payment-card" />
                <FaCcDiscover className="payment-card" />
                <FaCcPaypal className="payment-card" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
