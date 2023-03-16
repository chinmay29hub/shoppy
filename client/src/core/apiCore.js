import ***REMOVED*** API ***REMOVED***from '../config';
import queryString from 'query-string';

export const getProducts = (sortBy) => ***REMOVED***
  return fetch(`$***REMOVED***API}/products?sortBy=$***REMOVED***sortBy}&order=desc&limit=6`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getCategories = () => ***REMOVED***
  return fetch(`$***REMOVED***API}/categories`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = ***REMOVED***}) => ***REMOVED***
  const data = ***REMOVED***
    limit,
    skip,
    filters,
  };
  return fetch(`$***REMOVED***API}/products/by/search`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => ***REMOVED***
      console.log(err);
    });
};

export const list = (params) => ***REMOVED***
  const query = queryString.stringify(params);
  console.log('query', query);
  return fetch(`$***REMOVED***API}/products/search?$***REMOVED***query}`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const read = (productId) => ***REMOVED***
  return fetch(`$***REMOVED***API}/product/$***REMOVED***productId}`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelated = (productId) => ***REMOVED***
  return fetch(`$***REMOVED***API}/products/related/$***REMOVED***productId}`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => ***REMOVED***
  return fetch(`$***REMOVED***API}/braintree/getToken/$***REMOVED***userId}`, ***REMOVED***
    method: 'GET',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const processPayment = (userId, token, paymentData) => ***REMOVED***
  return fetch(`$***REMOVED***API}/braintree/payment/$***REMOVED***userId}`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: JSON.stringify(paymentData),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createOrder = (userId, token, createOrderData) => ***REMOVED***
  return fetch(`$***REMOVED***API}/order/create/$***REMOVED***userId}`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: JSON.stringify(***REMOVED*** order: createOrderData }),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};
