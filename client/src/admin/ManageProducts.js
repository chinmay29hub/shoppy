import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import ***REMOVED*** getProducts, deleteProduct ***REMOVED***from './apiAdmin';

const ManageProducts = () => ***REMOVED***
  const [products, setProducts] = useState([]);

  const ***REMOVED*** user, token ***REMOVED***= isAuthenticated();

  const loadProducts = () => ***REMOVED***
    getProducts().then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
      ***REMOVED***else ***REMOVED***
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => ***REMOVED***
    deleteProduct(productId, user._id, token).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
      ***REMOVED***else ***REMOVED***
        loadProducts();
      }
    });
  };

  useEffect(() => ***REMOVED***
    loadProducts();
  }, []);

  return (
    <Layout
      title='Manage Products'
      description='Perform CRUD on products'
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center'>Total ***REMOVED***products.length***REMOVED***products</h2>
          <hr />
          <ul className='list-group'>
            ***REMOVED***products.map((p, i) => (
              <li
                key=***REMOVED***i}
                className='list-group-item d-flex justify-content-between align-items-center'
              >
                <strong>***REMOVED***p.name}</strong>
                <Link to=***REMOVED***`/admin/product/update/$***REMOVED***p._id}`}>
                  <span className='badge badge-warning badge-pill'>Update</span>
                </Link>
                <Link>
                  <span
                    onClick=***REMOVED***() => destroy(p._id)}
                    className='badge badge-danger badge-pill'
                  >
                    Delete
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ManageProducts;
