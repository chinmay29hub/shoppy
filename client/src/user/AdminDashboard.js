import React from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';

const AdminDashboard = () => ***REMOVED***
  const ***REMOVED***
    user: ***REMOVED*** _id, name, email, role },
  ***REMOVED***= isAuthenticated();

  const adminLinks = () => ***REMOVED***
    return (
      <div className='card'>
        <h4 className='card-header'>Admin Links</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/create/category'>
              Create category
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/create/product'>
              Create product
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/admin/orders'>
              View Orders
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/admin/products'>
              Manage Products
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminInfo = () => ***REMOVED***
    return (
      <div className='card mb-5'>
        <h3 className='card-header'>User information</h3>
        <ul className='list-group'>
          <li className='list-group-item'>***REMOVED***name}</li>
          <li className='list-group-item'>***REMOVED***email}</li>
          <li className='list-group-item'>
            ***REMOVED***role === 1 ? 'Admin' : 'Registered user'}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title='Dashboard'
      description=***REMOVED***`$***REMOVED***name}`}
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-3'>***REMOVED***adminLinks()}</div>
        <div className='col-md-9'>***REMOVED***adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
