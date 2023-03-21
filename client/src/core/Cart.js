import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import Layout from './Layout';
import ***REMOVED*** getCart ***REMOVED***from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';


const Cart = () => ***REMOVED***
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => ***REMOVED***
    setItems(getCart());
  }, [run]);

  const showItems = (items) => ***REMOVED***
    return (
      <div>
        <h2>Your cart has ***REMOVED***`$***REMOVED***items.length}`***REMOVED***items</h2>
        <hr />
        ***REMOVED***items.map((product, i) => (
          <Card
            key=***REMOVED***i}
            product=***REMOVED***product}
            showAddToCartButton=***REMOVED***false}
            cartUpdate=***REMOVED***true}
            showRemoveProductButton=***REMOVED***true}
            setRun=***REMOVED***setRun}
            run=***REMOVED***run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to='/shop'>Continue shopping</Link>
    </h2>
  );

  return (
    <Layout
      title='Shopping Cart'
      description='Manage your cart items. Add remove checkout or continue shopping.'
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4'>
          ***REMOVED***items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className='col-md-4'>
          <h2 className='mb-4'>Your cart summary</h2>
          <hr />
          <Checkout products=***REMOVED***items***REMOVED***setRun=***REMOVED***setRun***REMOVED***run=***REMOVED***run***REMOVED***/>
        </div>
        <div className='col-md-2'></div>
      </div>
    </Layout>
  );
};

export default Cart;
