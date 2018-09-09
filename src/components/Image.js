import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  xl,
  lg,
  md,
  alt,
}) => (
  <picture>
    <source srcSet={md} media="(max-width: 768px)" />
    <source srcSet={lg} media="(max-width: 1024px)" />
    <img src={xl} alt={alt} />
  </picture>
);

Image.propTypes = {
  xl: PropTypes.string,
  lg: PropTypes.string,
  md: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
