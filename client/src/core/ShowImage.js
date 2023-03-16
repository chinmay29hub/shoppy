import React from 'react';
import ***REMOVED*** API ***REMOVED***from '../config';

const ShowImage = (***REMOVED*** item, url }) => (
  <div className='product-img' style=***REMOVED******REMOVED***height: '250px'}}>
    <img
      src=***REMOVED***`$***REMOVED***API}/$***REMOVED***url}/photo/$***REMOVED***item._id}`}
      alt=***REMOVED***item.name}
      className='mb-3'
      style=***REMOVED******REMOVED*** objectFit: 'contain', height: '100%', width: '100%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
    />
  </div>
);

export default ShowImage;
