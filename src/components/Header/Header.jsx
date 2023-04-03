import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import './header.css';

const Header = () => {
  return (
    <>
      {/* HEADER TOP STRIP */}
      <header className="header-top-strip bg-dark text-white py-2">
        <div className="container  ">
          <div className="row">
            <div className="col-6">
              <p className="mb-0">Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6 text-end">
              <p className="mb-0">
                Hotline:{' '}
                <a className="text-light" href="tel: +92 313 0159250">
                  +92 313 0159250
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER TOP STRIP ENDS HERE */}

      {/* <--------!!--------> */}

      {/* HEADER UPPER PART WHICH IS BELOW THAT SMALL STRIP */}

      <header className="header-upper text-white py-3">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-2 ">
              <h2 className="p-0 m-0">
                <Link className="text-white">Dev Corner</Link>
              </h2>
            </div>
            <div className="col-5 pr-4 ">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search Products Here..."
                  aria-label="Search Products Here..."
                />
                <span className="bg-yellow">
                  <i className="fa-solid fa-magnifying-glass "></i>
                </span>
              </div>
            </div>
            <div className="col-5  icons">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-between">
                  <i className="fa-solid fa-rotate icon-size"></i>
                  <p className="mb-0">
                    Compare <br /> Products{' '}
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <i className="fa-solid fa-heart icon-size"></i>
                  <p className="mb-0">
                    Favourite <br /> Wishlist{' '}
                  </p>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <i className="fa-solid fa-user icon-size"></i>
                  <p className="mb-0">
                    Login <br /> My Account
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between ms-4  ">
                  <i className="fa-solid fa-cart-shopping icon-size-cart"></i>
                  <div className="font-small d-flex flex-column  align-items-start ">
                    <p className="mb-1  bg-white badge text-dark px-2">0</p>
                    <p className="mb-0 ">$ 0.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER UPPER PART ENDS HERE */}

      {/* <--------!!--------> */}

      {/* HEADER BOTTOM STARTS HERE */}

      <header className="header-bottom bg-gray py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center gap-30">
              <div className="menu-bottom d-flex align-items-center  ">
                <div className="dropdown ">
                  <button
                    className="btn d-flex justify-content-between align-items-center gap-15 btn-secondary dropdown-toggle bg-transparent border-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CgMenuGridO className="text-white fs-5 mx-2" />
                    Show Categories
                  </button>
                  <ul
                    className="dropdown-menu bg-light-dark"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Our Store</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu-links">
                <menu className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/">Our Store</NavLink>
                  <NavLink to="/">Blogs</NavLink>
                  <NavLink to="/">Contact</NavLink>
                </menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
