import './categories.css';
const Categories = ({ cat }) => {
  const { slogan, title, desc, img } = cat;
  return (
    <>
      <div className="small-banner position-relative">
        <img src={img} className="img-fluid rounded" alt="Main Banner" />
        <div className="small-banner-content position-absolute">
          <h4>{slogan}</h4>
          <h5> {title} </h5>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
