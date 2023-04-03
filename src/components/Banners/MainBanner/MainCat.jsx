import './maincat.css';
import { Link } from 'react-router-dom';

const MainCat = ({ main }) => {
  const { slogan, title, desc, img } = main;
  return (
    <>
      <div className="main-banner position-relative" >
        <img src={img} className="img-fluid rounded" alt="Main Banner" />
        <div className="main-banner-content position-absolute">
          <h4>{slogan}</h4>
          <h5> {title} </h5>
          <p className='my-3'>{desc}</p>
          <Link>
            <button className="btn-dark ">Buy Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainCat;
