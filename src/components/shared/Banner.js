import React from "react";

const Banner = ({ title, img }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <img src={img} alt={title} />
    </div>
  );
};

export default Banner;
