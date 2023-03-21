import ***REMOVED*** API ***REMOVED***from '../config';

export const signup = (user) => ***REMOVED***
  // console.log(name, email, password);
  return fetch(`$***REMOVED***API}/signup`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => ***REMOVED***
      console.log(err);
    });
};

export const signin = (user) => ***REMOVED***
  // console.log(name, email, password);
  return fetch(`$***REMOVED***API}/signin`, ***REMOVED***
    method: 'POST',
    headers: ***REMOVED***
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => ***REMOVED***
      return response.json();
    })
    .catch((err) => ***REMOVED***
      console.log(err);
    });
};

export const authenticate = (data, next) => ***REMOVED***
  if (typeof window !== 'undefined') ***REMOVED***
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

export const signout = (next) => ***REMOVED***
  if (typeof window !== 'undefined') ***REMOVED***
    localStorage.removeItem('jwt');
    next();
    return fetch(`$***REMOVED***API}/signout`, ***REMOVED***
      method: 'GET',
    })
      .then((response) => ***REMOVED***
        console.log('signout', response);
      })
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => ***REMOVED***
  if (typeof window === 'undefined') ***REMOVED***
    return false;
  }
  if (localStorage.getItem('jwt')) ***REMOVED***
    return JSON.parse(localStorage.getItem('jwt'));
  ***REMOVED***else ***REMOVED***
    return false;
  }
};
