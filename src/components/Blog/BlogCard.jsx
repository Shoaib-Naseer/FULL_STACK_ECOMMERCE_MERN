import './blogCard.css'

const BlogCard = ({blog}) => {
  const {img,date,title,desc} = blog
  return (
    <>
        <div className="col-3">
          <div className="blog-card">
            <div className="card-image">
              <img src={img} alt="Blog-thumbnail" className='img-fluid' />
            </div>
            <div className="blog-content">
                <p className='text-uppercase'>{date}</p> 
                <h5>{title}</h5> 
                <p>{desc}</p> 
                <button className="btn-dark my-2">Read more</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default BlogCard