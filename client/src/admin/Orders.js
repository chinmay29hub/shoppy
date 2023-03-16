import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import ***REMOVED*** listOrders, getStatusValues, updateOrderStatus ***REMOVED***from './apiAdmin';
import moment from 'moment';

const Orders = () => ***REMOVED***
  const [orders, setOrders] = useState([]);
  const [statusValues, setStatusValues] = useState([]);
  const ***REMOVED*** user, token ***REMOVED***= isAuthenticated();

  const loadOrders = () => ***REMOVED***
    listOrders(user._id, token).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
      ***REMOVED***else ***REMOVED***
        setOrders(data);
      }
    });
  };

  const loadStatusValues = () => ***REMOVED***
    getStatusValues(user._id, token).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
      ***REMOVED***else ***REMOVED***
        setStatusValues(data);
      }
    });
  };

  useEffect(() => ***REMOVED***
    loadOrders();
    loadStatusValues();
  }, []);

  const showOrdersLength = () => ***REMOVED***
    if (orders.length > 0) ***REMOVED***
      return (
        <h1 className='text-danger display-2'>Total orders: ***REMOVED***orders.length}</h1>
      );
    ***REMOVED***else ***REMOVED***
      return <h1 className='text-danger'>No orders</h1>;
    }
  };

  const showInput = (key, value) => (
    <div className='input-group mb-2 mr-sm-2'>
      <div className='input-group-prepend'>
        <div className='input-group-text'>***REMOVED***key}</div>
      </div>
      <input type='text' value=***REMOVED***value***REMOVED***className='form-control' readOnly />
    </div>
  );

  const handleStatusChange = (e, orderId) => ***REMOVED***
    updateOrderStatus(user._id, token, orderId, e.target.value).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log('Status update failed');
      ***REMOVED***else ***REMOVED***
        loadOrders();
      }
    });
    // console.log('update order status');
  };

  const showStatus = (o) => (
    <div className='form-group'>
      <h3 className='mark mb-4'>Status: ***REMOVED***o.status}</h3>
      <select
        className='form-control'
        onChange=***REMOVED***(e) => handleStatusChange(e, o._id)}
      >
        <option>Update Status</option>
        ***REMOVED***statusValues.map((status, index) => (
          <option key=***REMOVED***index***REMOVED***value=***REMOVED***status}>
            ***REMOVED***status}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <Layout
      title='Orders'
      description=***REMOVED***`Hey $***REMOVED***user.name}, you can manage all the ordes here`}
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          ***REMOVED***showOrdersLength()}

          ***REMOVED***orders.map((o, oIndex) => ***REMOVED***
            return (
              <div
                className='mt-5'
                key=***REMOVED***oIndex}
                style=***REMOVED******REMOVED*** borderBottom: '5px solid indigo' }}
              >
                <h2 className='mb-5'>
                  <span className='bg-primary'>Order ID: ***REMOVED***o._id}</span>
                </h2>

                <ul className='list-group mb-2'>
                  <li className='list-group-item'>***REMOVED***showStatus(o)}</li>
                  <li className='list-group-item'>
                    Transaction ID: ***REMOVED***o.transaction_id}
                  </li>
                  <li className='list-group-item'>Amount: $***REMOVED***o.amount}</li>
                  <li className='list-group-item'>Ordered by: ***REMOVED***o.user.name}</li>
                  <li className='list-group-item'>
                    Ordered on: ***REMOVED***moment(o.createdAt).fromNow()}
                  </li>
                  <li className='list-group-item'>
                    Delivery address: ***REMOVED***o.address}
                  </li>
                </ul>

                <h3 className='mt-4 mb-4 font-italic'>
                  Total products in the order: ***REMOVED***o.products.length}
                </h3>

                ***REMOVED***o.products.map((p, pIndex) => (
                  <div
                    className='mb-4'
                    key=***REMOVED***pIndex}
                    style=***REMOVED******REMOVED*** padding: '20px', border: '1px solid indigo' }}
                  >
                    ***REMOVED***showInput('Product name', p.name)}
                    ***REMOVED***showInput('Product price', p.price)}
                    ***REMOVED***showInput('Product total', p.count)}
                    ***REMOVED***showInput('Product Id', p._id)}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
