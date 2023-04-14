import './specialProduct.css';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

import Watch from '../../../assets/images/watch.jpg';

import View from '../../../assets/images/view.svg';
import Wish from '../../../assets/images/wish.svg';
import ProdCompare from '../../../assets/images/prodcompare.svg';
import AddCart from '../../../assets/images/add-cart.svg';


const SpecialProducts = ({product}) => {
  const {img,brand,title,rating,price,remaining} = product
  return (
    <>
      <div className="col-6 mb-4 ">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="special-product-image-container position-relative">
              <div className="wishlist position-absolute">
                <Link>
                  <img src={Wish} alt="Add to WishList" />
                </Link>
              </div>
              <img src={img} alt="Product Image" />

              <div className="action-bar position-absolute d-flex flex-column gap-15">
                <Link>
                  <img src={ProdCompare} alt="Compare Products" />
                </Link>
                <Link>
                  <img src={View} alt="View Item" />
                </Link>
                <Link>
                  <img src={AddCart} alt="Add to Cart" />
                </Link>
              </div>
            </div>

            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={rating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price my-2"><span>${price} &nbsp; </span><strike>$75.00</strike></p>  
              <div className="discount-till d-flex align-items-center gap-1">
                <p className="mb-0">
                  <b>5</b> days
                </p>
                <div className="d-flex gap-1 align-items-center timer-container ">
                    <span className="badge rounded-circle bg-danger p-2 ">1</span>:
                    <span className="badge rounded-circle bg-danger p-2">2</span>:
                    <span className="badge rounded-circle bg-danger p-2">3</span>
                </div>

               
              </div>

              <div className="prod-count my-2">
                  <p>Products: {remaining}</p>
                  <div className="progress" style={{height: "10px"}}>
                    <div className="progress-bar" role='progressbar' style={{width: "15%",background:'#febd69'}} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>

                    </div>
                  </div>
              </div>

              <Link className='button my-2'>Add to Cart</Link>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProducts;
