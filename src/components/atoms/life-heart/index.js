import React, { memo } from 'react';
import { string } from 'prop-types';

const heartType = {
  full: {
    src: 'img/heart__full.svg',
    alt: 'Life',
  },
  empty: {
    src: 'img/heart__empty.svg',
    alt: 'Missed Life',
  },
};

const heart = ({ type }) => {
  const obj = heartType[type];
  if (!obj) {
    throw new Error(`Неверный тип для инициализации life-heart: ${type}`);
  }
  const { src, alt } = obj;
  return (
    <img
      src={src}
      className="game__heart"
      alt={alt}
      width="31"
      height="27"
    />
  );
};

heart.propTypes = {
  type: string,
};

heart.defaultProps = {
  type: '',
};


export default memo(heart);
