import React from "react";
import T from "prop-types";

const ShibesGallery = ({ images }) => (
  <div className="ShibesGallery">
    <ul>
      {images.map(url => <li key={url}><img src={url} alt="" /></li>)}
    </ul>
  </div>
);

ShibesGallery.propTypes = {
  images: T.arrayOf(T.string).isRequired
};

export default ShibesGallery;