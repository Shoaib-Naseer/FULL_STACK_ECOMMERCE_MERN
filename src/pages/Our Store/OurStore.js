import React from 'react';
import './ourStore.css';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from '../../components/Meta/Meta';
import ReactStars from 'react-rating-stars-component';

import RandomImage from '../../assets/images/watch.jpg';

const OurStore = () => {
  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title={'store'} />

      <div className="store-wrappe py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card py-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <ul>
                  <li>watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">Filter By</h3>
                <div className="availablity-section my-2">
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="stock"
                    />
                    <label htmlFor="stock" className="form-check-label">
                      In Stock {1}
                    </label>
                  </div>
                </div>

                <div className="price-section my-2">
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex gap-2">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                </div>

                <div className="color-section my-2">
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="size-section my-2">
                  <h5 className="sub-title mt-3">Size</h5>

                  <div className="size">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-2"
                      />
                      <label htmlFor="size-2" className="form-check-label">
                        S {2}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-3"
                      />
                      <label htmlFor="size-3" className="form-check-label">
                        M {2}
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-4"
                      />
                      <label htmlFor="size-4" className="form-check-label">
                        H {3}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">Product Tags</h3>

                <div className="product-tags">
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <div className="rounded bg-light text-secondary p-1">
                      Headphone
                    </div>
                    <div className="rounded bg-light text-secondary p-1">
                      Mobile
                    </div>
                    <div className="rounded bg-light text-secondary p-1">
                      Laptop
                    </div>
                    <div className="rounded bg-light text-secondary p-1">
                      Oppo
                    </div>
                    <div className="rounded bg-light text-secondary p-1">
                      Speaker
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">Random Products</h3>
                <div className="random-products-container">
                  <div className="d-flex random-product my-1">
                    <div className="product-image w-50">
                      <img
                        src={RandomImage}
                        className="img-fluid"
                        alt="Random Image"
                      />
                    </div>
                    <div className="product-content w-50 ">
                      <h6>
                        Kids Headphones Bulk 10 Pack <br />
                        Multi Colored For ...
                      </h6>

                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />

                      <p className="price mt-2">${100.0}</p>
                    </div>
                    <hr />
                  </div>

                  <div className="d-flex random-product my-1">
                    <div className="product-image w-50">
                      <img
                        src={RandomImage}
                        className="img-fluid"
                        alt="Random Image"
                      />
                    </div>
                    <div className="product-content w-50 ">
                      <h6>
                        Kids Headphones Bulk 10 Pack <br />
                        Multi Colored For ...
                      </h6>

                      <ReactStars
                        count={5}
                        size={20}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />

                      <p className="price mt-2">${100.0}</p>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
