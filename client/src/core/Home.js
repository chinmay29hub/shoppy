import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from './Layout';
import ***REMOVED*** getProducts ***REMOVED***from './apiCore';
import Card from './Card';
import Search from './Search';
import 'fontsource-roboto';
import Copyright from './Copyright';

const Home = () => ***REMOVED***
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([]);

  const loadProductsBySell = () => ***REMOVED***
    getProducts('sold').then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => ***REMOVED***
    getProducts('createdAt').then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => ***REMOVED***
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title='Home page'
      description='MERN E-commerce App'
      className='container-fluid'
    >
      <Search />
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <h2 className='mb-2'>New Arrivals</h2>
          <div className='row'>
            ***REMOVED***productsByArrival.map((product, i) => (
              <div key=***REMOVED***i***REMOVED***className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                <Card product=***REMOVED***product***REMOVED***/>
              </div>
            ))}
          </div>

          <h2 className='mb-2 mt-4'>Best Sellers</h2>
          <div className='row'>
            ***REMOVED***productsBySell.map((product, i) => (
              <div key=***REMOVED***i***REMOVED***className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                <Card product=***REMOVED***product***REMOVED***/>
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>

      <Copyright />
    </Layout>
  );
};

export default Home;
