import React from 'react';
import ***REMOVED*** API ***REMOVED***from '../config';

const ShowImage = (***REMOVED*** item, url }) => (
  <div className='product-img' style=***REMOVED******REMOVED*** height: '250px' }}>
    <img
      src=***REMOVED***`$***REMOVED***API}/$***REMOVED***url}/photo/$***REMOVED***item._id}`}
      alt=***REMOVED***item.name}
      className='mb-3'
      style=***REMOVED******REMOVED***
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
