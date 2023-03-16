import ***REMOVED*** API ***REMOVED***from '../config';

export const read = (userId, token) => ***REMOVED***
  return fetch(`$***REMOVED***API}/user/$***REMOVED***userId}`, ***REMOVED***
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

export const update = (userId, token, user) => ***REMOVED***
  return fetch(`$***REMOVED***API}/user/$***REMOVED***userId}`, ***REMOVED***
    method: 'PUT',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer $***REMOVED***token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUser = (user, next) => ***REMOVED***
  if (typeof window !== 'undefined') ***REMOVED***
    if (localStorage.getItem('jwt')) ***REMOVED***
      let auth = JSON.parse(localStorage.getItem('jwt'));
      auth.user = user;
      localStorage.setItem('jwt', JSON.stringify(auth));
      next();
    }
  }
};

export const getPurchaseHistory = (userId, token) => ***REMOVED***
  return fetch(`$***REMOVED***API}/orders/by/user/$***REMOVED***userId}`, ***REMOVED***
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

