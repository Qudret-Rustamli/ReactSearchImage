import React from 'react';
import Image from './Image';
import './imageList.css';

const ImageList = ({ img }) => {
  return (
    <div className="image-list">
      {img.map((img) => (
        <Image key={img.id} img={img} />
      ))}
    </div>
  );
};

export default ImageList;
