import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import ***REMOVED*** getPurchaseHistory ***REMOVED***from './apiUser';
import moment from 'moment';

const Dashboard = () => ***REMOVED***
  const [history, setHistory] = useState([]);

  const ***REMOVED***
    user: ***REMOVED*** _id, name, email, role },
  ***REMOVED***= isAuthenticated();

  const token = isAuthenticated().token;

  const init = (userId, token) => ***REMOVED***
    getPurchaseHistory(userId, token).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
      ***REMOVED***else ***REMOVED***
        setHistory(data);
      }
    });
  };

  useEffect(() => ***REMOVED***
    init(_id, token);
  }, []);

  const userLinks = () => ***REMOVED***
    return (
      <div className='card'>
        <h4 className='card-header'>User links</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/cart'>
              My cart
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to=***REMOVED***`/profile/$***REMOVED***_id}`}>
              Update profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => ***REMOVED***
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

  const purchaseHistory = (history) => ***REMOVED***
    return (
      <div className='card mb-5'>
        <h3 className='card-header'>Purchase history</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            ***REMOVED***history.map((h, i) => ***REMOVED***
              return (
                <div>
                  <hr />
                  ***REMOVED***h.products.map((p, i) => ***REMOVED***
                    return (
                      <div key=***REMOVED***i}>
                        <h6>Product name: ***REMOVED***p.name}</h6>
                        <h6>Product price: $***REMOVED***p.price}</h6>
                        <h6>Purchased date: ***REMOVED***moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
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
        <div className='col-md-3'>***REMOVED***userLinks()}</div>
        <div className='col-md-9'>
          ***REMOVED***userInfo()}
          ***REMOVED***purchaseHistory(history)}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
