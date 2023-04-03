import './productcard.css';
import ReactStars from 'react-rating-stars-component';

const ProductCard = ({ product }) => {
  const { image, brand, desc, price,rating } = product;
  return (
    <>
      <div className="product-card">
        <div className="card-image">
          <img src={image} alt="product-thumbnail" className="img-fluid" />
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
      </div>
    </>
  );
};

export default ProductCard;
