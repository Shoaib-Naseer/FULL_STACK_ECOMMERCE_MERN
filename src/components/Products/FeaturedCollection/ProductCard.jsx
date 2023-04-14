import './productcard.css';
import ReactStars from 'react-rating-stars-component';

import {Link} from 'react-router-dom'

import View from '../../../assets/images/view.svg'
import Wish from '../../../assets/images/wish.svg'
import ProdCompare from '../../../assets/images/prodcompare.svg'
import AddCart from '../../../assets/images/add-cart.svg'

const ProductCard = ({ product }) => {
  const { image, brand, desc, price, rating } = product;
  return (
    <>
      <Link className="product-card">
        
        <div className="card-image position-relative">
        <div className="wishlist position-absolute">
          <Link><img src={Wish} alt="Add to WishList" /></Link>
        </div>

          <img src={image[0]} alt="product-thumbnail" className="img-fluid " />
          <img src={image[1]} alt="product-thumbnail" className="img-fluid" />

          {/* Placing Action bar Items inside card image to work only when image is hovered */}
          <div className="action-bar position-absolute d-flex flex-column gap-15">
          <Link><img src={ProdCompare} alt="Compare Products" /></Link>
          <Link><img src={View} alt="View Item" /></Link>
          <Link><img src={AddCart} alt="Add to Cart" /></Link>
        </div>
        </div>
        <div className="product-content">
          <h6>{brand}</h6>
          <h5>{desc}</h5>
          <ReactStars
            count={5}
            size={24}
            value={rating}
            edit={false}
            activeColor="#ffd700"
          />
          <p>${price}</p>
        </div>

        
        
      </Link>
    </>
  );
};

export default ProductCard;
