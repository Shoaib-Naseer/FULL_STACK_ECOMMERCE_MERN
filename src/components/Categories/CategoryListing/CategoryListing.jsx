import './categoryListing.css';
const CategoryListing = ({ category }) => {
  const { title, stock, img } = category;
  return (
    <>
      <div className="category-item d-flex align-items center ">
        <div className="item-content">
          <h6>{title}</h6>
          <p>{stock}</p>
        </div>
        <div>
          <img src={img} className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default CategoryListing;
