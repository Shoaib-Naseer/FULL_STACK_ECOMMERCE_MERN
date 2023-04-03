import Marquee from 'react-fast-marquee';
import './marquee.css';

const MarqueeContainer = ({ logos }) => {
  return (
    <>
      <Marquee speed={15} className="d-flex">
        {logos.map((logo, index) => (
          <div key={index} className="marque-item w-25">
            <img src={logo.logo} className="img-fluid" alt="" />
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default MarqueeContainer;
