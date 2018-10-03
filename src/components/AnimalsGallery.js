import React from "react";
import T from "prop-types";

const AnimalsGallery = ({ images }) => (
  <div className="AnimalsGallery">
    <ul>
      {images.map(url => <li key={url}><img src={url} alt="" /></li>)}
    </ul>
  </div>
);

AnimalsGallery.propTypes = {
  images: T.arrayOf(T.string).isRequired
};

export default AnimalsGallery;