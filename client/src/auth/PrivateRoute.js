import React, ***REMOVED*** Component ***REMOVED***from 'react';
import ***REMOVED*** Route, Redirect ***REMOVED***from 'react-router-dom';
import ***REMOVED*** isAuthenticated ***REMOVED***from './index';

const PrivateRoute = (***REMOVED*** component: Component, ...rest }) => (
  <Route
    ***REMOVED***...rest}
    render=***REMOVED***(props) =>
      isAuthenticated() ? (
        <Component ***REMOVED***...props***REMOVED***/>
      ) : (
        <Redirect
          to=***REMOVED******REMOVED***
            pathname: '/signin',
            state: ***REMOVED*** from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
