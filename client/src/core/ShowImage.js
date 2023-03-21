import React from 'react';
import { API } from '../config';

const ShowImage = ({ item, url }) => (
  <div className='product-img' style={{ height: '250px' }}>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='mb-3'
      style={{
        objectFit: 'contain',
        height: '100%',
        display: 'flex',
        margin: ".8rem",
        width: 'calc(100% - 1.6rem)',
        border: "0.01rem solid lightgray",
        borderRadius: "0.6rem"
      }}
    />
  </div>
);

export default ShowImage;
