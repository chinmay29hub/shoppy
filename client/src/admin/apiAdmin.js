import ***REMOVED*** API ***REMOVED***from '../config';

export const createCategory = (userId, token, category) => ***REMOVED***
  return fetch(`$***REMOVED***API}/category/create/$***REMOVED***userId}`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => ***REMOVED***
      console.log(err);
    });
};

export const createProduct = (userId, token, product) => ***REMOVED***
  return fetch(`$***REMOVED***API}/product/create/$***REMOVED***userId}`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: product,
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => ***REMOVED***
      console.log(err);
    });
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

export const listOrders = (userId, token) => ***REMOVED***
  return fetch(`$***REMOVED***API}/order/list/$***REMOVED***userId}`, ***REMOVED***
    method: 'GET',
    headers: ***REMOVED***
      Accept: 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getStatusValues = (userId, token) => ***REMOVED***
  return fetch(`$***REMOVED***API}/order/status-values/$***REMOVED***userId}`, ***REMOVED***
    method: 'GET',
    headers: ***REMOVED***
      Accept: 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => ***REMOVED***
  return fetch(`$***REMOVED***API}/order/$***REMOVED***orderId}/status/$***REMOVED***userId}`, ***REMOVED***
    method: 'PUT',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: JSON.stringify(***REMOVED*** status, orderId }),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => ***REMOVED***
  return fetch(`$***REMOVED***API}/products?limit=undefined`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = (productId, userId, token) => ***REMOVED***
  return fetch(`$***REMOVED***API}/product/$***REMOVED***productId}/$***REMOVED***userId}`, ***REMOVED***
    method: 'DELETE',
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

export const getProduct = (productId) => ***REMOVED***
  return fetch(`$***REMOVED***API}/product/$***REMOVED***productId}`, ***REMOVED***
    method: 'GET',
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => ***REMOVED***
  return fetch(`$***REMOVED***API}/product/$***REMOVED***productId}/$***REMOVED***userId}`, ***REMOVED***
    method: 'PUT',
    headers: ***REMOVED***
      Accept: 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: product,
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};
