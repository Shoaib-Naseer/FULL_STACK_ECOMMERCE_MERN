import MainBanner from '../../assets/images/main-banner-1.jpg';

import CatBanner1 from '../../assets/images/catbanner-01.jpg';
import CatBanner2 from '../../assets/images/catbanner-02.jpg';
import CatBanner3 from '../../assets/images/catbanner-03.jpg';
import CatBanner4 from '../../assets/images/catbanner-04.jpg';

import Service1 from '../../assets/images/service.png'
import Service2 from '../../assets/images/service-02.png'
import Service3 from '../../assets/images/service-03.png'
import Service4 from '../../assets/images/service-04.png'
import Service5 from '../../assets/images/service-05.png'

//Image for Special Product Section
import Watch from '../../assets/images/watch.jpg';

//Images for Popular Products Section
import Famous1 from '../../assets/images/famous-1.jpg'
import Famous2 from '../../assets/images/famous-2.jpg'


import Camera from '../../assets/images/camera.jpg'
import Tv from '../../assets/images/tv.jpg'
import SmartWatch from '../../assets/images/headphone.jpg'

import Brand1 from '../../assets/images/brand-01.png'
import Brand2 from '../../assets/images/brand-02.png'
import Brand3 from '../../assets/images/brand-03.png'
import Brand4 from '../../assets/images/brand-04.png'
import Brand5 from '../../assets/images/brand-05.png'
import Brand6 from '../../assets/images/brand-06.png'
import Brand7 from '../../assets/images/brand-07.png'
import Brand8 from '../../assets/images/brand-08.png'

import Blog1 from '../../assets/images/blog-1.jpg'
import Product1 from '../../assets/images/watch.jpg'
import Product2 from '../../assets/images/watch-1.jpg'

import MainCat from '../../components/Banners/MainBanner/MainCat';
import Categories from '../../components/Banners/CategoryBanner/Categories';
import CategoryListing from '../../components/Categories/CategoryListing/CategoryListing';
import Services from '../../components/Services/Services';
import MarqueeContainer from '../../components/Marquee/MarqueeContainer';
import BlogCard from '../../components/Blog/BlogCard';

import './home.css';
import ProductCard from '../../components/Products/FeaturedCollection/ProductCard';
import SpecialProducts from '../../components/Products/SpecialProducts/SpecialProducts';
import FamousProducts from '../../components/Products/FamousProducts/FamousProducts';

function Home() {

  const category_Banner= [
    {
      slogan: 'SUPERCHARGED FOR PROS',
      title: 'Special Sale',
      desc: 'From $999.00 or $41.62/mo.for 24 mo. Footnote',
      img: CatBanner1,
    },
    {
      slogan: 'SUPERCHARGED FOR PROS',
      title: 'Special Sale',
      desc: 'From $999.00 or $41.62/mo.for 24 mo. Footnote',
      img: CatBanner2,
    },
    {
      slogan: 'SUPERCHARGED FOR PROS',
      title: 'Special Sale',
      desc: 'From $999.00 or $41.62/mo.for 24 mo. Footnote',
      img: CatBanner3,
    },
    {
      slogan: 'SUPERCHARGED FOR PROS',
      title: 'Special Sale',
      desc: 'From $999.00 or $41.62/mo.for 24 mo. Footnote',
      img: CatBanner4,
    },
  ];
  const category_list = [
    {title:"Music & Gaming",stock:"8 items", img:Camera},
    {title:"Computer & Laptops",stock:"8 items", img:Camera},
    {title:"Smart Tv",stock:"10 items", img:Tv},
    {title:"Smart Watches",stock:"8 items", img:SmartWatch},
    {title:"Camera & Videos",stock:"8 items", img:Camera},
    {title:"Portable Speakers",stock:"8 items", img:Camera},
    {title:"Mobiles And Tablets",stock:"8 items", img:Camera},
    {title:"Headphones",stock:"8 items", img:Camera},
    {title:"Accessories",stock:"8 items", img:Camera},
    {title:"Home Appliances",stock:"8 items", img:Camera},
  ]
  const main_Banner = [
    {
      slogan: 'SUPERCHARGED FOR PROS',
      title: 'Special Sale',
      desc: 'From $999.00 or $41.62/mo.for 24 mo. Footnote',
      img: MainBanner,
    },
  ];
  const services_list = [
    {title:"Free Shipping",desc:"From  all orders over $100",icon:Service1},
    {title:"Daily Surprise Offers",desc:"Save up to 25%",icon:Service2},
    {title:"Support 24/7",desc:"Shop with an expert",icon:Service3},
    {title:"Affordable Prices",desc:"Get Factory direct price",icon:Service4},
    {title:"Secure Payments",desc:"100% Protected Payments",icon:Service5}
  ]
  const featured_collection =[
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
    {image:[Product1,Product2],brand:'havelis',desc:'Kids Headphones Bulk 10 pack Multi Colored For...',rating:4,price:100},
  ]
  const marquee_logos = [
    {logo:Brand1},
    {logo:Brand2},
    {logo:Brand3},
    {logo:Brand4},
    {logo:Brand5},
    {logo:Brand6},
    {logo:Brand7},
    {logo:Brand8},

  ]
  const blogs = [
    {img:Blog1,date:'11 JUNE 2022',title:"A Beautifull Sunday Morning",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.... "},
    {img:Blog1,date:'12 JUNE 2022',title:"A Beautifull Sunday Morning",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.... "},
    {img:Blog1,date:'13 JUNE 2022',title:"A Beautifull Sunday Morning",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.... "},
    {img:Blog1,date:'13 JUNE 2022',title:"A Beautifull Sunday Morning",desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.... "},
  ]
  const special_products = [
    {img:Watch,brand:'Havels',title:"Samsung Galaxy Note10+ Mobile Phone; Sim...",rating:4,price:60.00,remaining:5},
    {img:Watch,brand:'Havels',title:"Samsung Galaxy Note10+ Mobile Phone; Sim...",rating:4,price:60.00,remaining:5},
    {img:Watch,brand:'Havels',title:"Samsung Galaxy Note10+ Mobile Phone; Sim...",rating:4,price:60.00,remaining:5},
    {img:Watch,brand:'Havels',title:"Samsung Galaxy Note10+ Mobile Phone; Sim...",rating:4,price:60.00,remaining:5},

  ]
  const famous_products =[
    {prod_img:Famous1, topTitle:'big screen',mainTitle:'Smart Watch Series 7',subTitle:"From $399 or $16.62/mo. for 24 mo.*"},
    {prod_img:Famous2, topTitle:'Studio Display',mainTitle:"600 nits of brightness",subTitle:"27 inch 5k Retina Display"},
    {prod_img:Famous2, topTitle:'Studio Display',mainTitle:"600 nits of brightness",subTitle:"27 inch 5k Retina Display"},
    {prod_img:Famous2, topTitle:'Studio Display',mainTitle:"600 nits of brightness",subTitle:"27 inch 5k Retina Display"},
  ]
  return (
    <>
      {/* Main And Category Banners */}
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* Main Category highlight Component can be made  */}
              {main_Banner.map((main, index) => (
                <MainCat main={main} key={index} />
              ))}
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                {/* Category Component can be made */}
                {category_Banner.map((cat, index) => (
                  <Categories cat={cat} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                {/* Service component can be made */}
                {services_list.map((service,index)=>(
                 <Services service={service} key={index} />
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main categories Listing */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center shadow">
                {category_list.map((category,index)=>(
                 <CategoryListing category={category} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Featured Collections Slider */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className='py-3'>Featured Collection</h2>
          <div className="d-flex gap-3 flex-nowrap overflow-hidden">
            {featured_collection.map((product,index)=>(
              <ProductCard product={product} key={index} />
            ))}
            
          </div>
        </div>
      </section>

      {/* Special Products  */}
      <section className="special-products py-5 bg-light">
        <div className="container mx-auto">
        <h2 className='py-3'>Special Products</h2>
          <div className="row">
            {special_products.map((product,index)=>(
              <SpecialProducts product={product} key={index}/>
            ))}
          </div>

        </div>
      </section>


      {/* Famous Products */}
      <section className="famous-wrapper py-5 bg-light">
        <div className="container">
          <div className="row">
            <h2 className='py-3'>Famous Products</h2>
            {famous_products.map((famous_product,index)=>(
              <FamousProducts key={index} famous_product={famous_product} />
            ))}
          </div>
        </div>
      </section>

       {/* Popular Products Slider */}
       <section className="popular-wrapper bg-light py-5">
        <div className="container">
          <h2 className='py-3'>Our Popular Products</h2>
          <div className="d-flex flex-nowrap gap-3 overflow-hidden">
            {featured_collection.map((product,index)=>(
              <ProductCard product={product} key={index} />
            ))}
            
          </div>
        </div>
      </section>

      {/* Marquee Slider */}
      <section className="marque-wrapper bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper  shadow bg-white p-3">
               <MarqueeContainer logos={marquee_logos} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Container */}
      <section className="blow-wrapper py-5 bg-light">
        <div className="container">
          <div className="row">
            <h2 className='py-3'> Our Latest Blogs</h2>
            {blogs.map((blog,index)=>(
              <BlogCard blog={blog} key={index} />
            ))}
          </div>
        </div>
      </section>


      
    </>
  );
}

export default Home;
