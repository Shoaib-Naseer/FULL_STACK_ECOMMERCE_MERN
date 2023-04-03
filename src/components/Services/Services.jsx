import React from 'react';

const Services = ({ service }) => {
  const {title,desc,icon} = service
  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-4">
        <div>
          <img src={icon} alt="" />
        </div>
        <div>
          <h6>{title}</h6>
          <p className="mb-0">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Services;
