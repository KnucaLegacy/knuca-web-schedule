import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ xl, lg, alt }) => (
  <picture>
    <source srcSet={lg} media="(max-width: 1024px)" />
    <img src={xl} alt={alt} />
  </picture>
);

Image.propTypes = {
  xl: PropTypes.string,
  lg: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
