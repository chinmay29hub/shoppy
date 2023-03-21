import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Button from '@material-ui/core/Button';
import ***REMOVED***
  getProducts,
  getBraintreeClientToken,
  processPayment,
  createOrder,
***REMOVED***from './apiCore';
import ***REMOVED*** emptyCart ***REMOVED***from './cartHelpers';
import Card from './Card';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';

const Checkout = (***REMOVED*** products, setRun = (f) => f, run = undefined }) => ***REMOVED***
  const [data, setData] = useState(***REMOVED***
    loading: false,
    success: false,
    clientToken: null,
    error: '',
    instance: ***REMOVED***},
    address: '',
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => ***REMOVED***
    getBraintreeClientToken(userId, token).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
        setData(***REMOVED*** ...data, error: data.error });
      ***REMOVED***else ***REMOVED***
        console.log(data);
        setData(***REMOVED*** clientToken: data.clientToken });
      }
    });
  };

  useEffect(() => ***REMOVED***
    getToken(userId, token);
  }, []);

  const handleAddress = (event) => ***REMOVED***
    setData(***REMOVED*** ...data, address: event.target.value });
  };

  const getTotal = () => ***REMOVED***
    return products.reduce((currentValue, nextValue) => ***REMOVED***
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const showCheckout = () => ***REMOVED***
    return isAuthenticated() ? (
      <div>***REMOVED***showDropIn()}</div>
    ) : (
      <Link to='/signin'>
        <Button variant='contained' color='primary'>
          Sign in to checkout
        </Button>
      </Link>
    );
  };

  let deliveryAddress = data.address;

  const buy = () => ***REMOVED***
    setData(***REMOVED*** loading: true });
    let nonce;
    let getNonce = data.instance &&
      data.instance
        .requestPaymentMethod()
        .then((data) => ***REMOVED***
          nonce = data.nonce;
          const paymentData = ***REMOVED***
            paymentMethodNonce: nonce,
            amount: getTotal(products),
          };
          processPayment(userId, token, paymentData)
            .then((response) => ***REMOVED***
              console.log(response)
              const createOrderData = ***REMOVED***
                products: products,
                transaction_id: response.transaction.id,
                amount: response.transaction.amount,
                address: deliveryAddress,
              };
              createOrder(userId, token, createOrderData)
                .then((response) => ***REMOVED***
                  emptyCart(() => ***REMOVED***
                    setRun(!run);
                    setData(***REMOVED***
                      loading: false,
                      success: true,
                    });
                  });
                })
                .catch((error) => ***REMOVED***
                  console.log(error);
                  setData(***REMOVED*** loading: false });
                });
            })
            .catch((error) => ***REMOVED***
              console.log(error);
              setData(***REMOVED*** loading: false });
            });
        })
        .catch((error) => ***REMOVED***
          setData(***REMOVED*** ...data, error: error.message });
        });
  };
  

  const showDropIn = () => (
    <div onBlur=***REMOVED***() => setData(***REMOVED*** ...data, error: '' })}>
      ***REMOVED***data.clientToken !== null && products.length > 0 ? (
        <div>
          <div className='form-group mb-3'>
            <label className='text-muted'>Delivery address:</label>
            <textarea
              onChange=***REMOVED***handleAddress}
              className='form-control'
              value=***REMOVED***data.address}
              placeholder='Type your delivery address here...'
            />
          </div>

          <DropIn
            options=***REMOVED******REMOVED***
              authorization: data.clientToken,
              paypal: ***REMOVED***
                flow: 'vault',
              },
            }}
            onInstance=***REMOVED***(instance) => (data.instance = instance)}
          />
          <button onClick=***REMOVED***buy***REMOVED***className='btn btn-success btn-block'>
            Pay
          </button>
        </div>
      ) : null}
    </div>
  );

  const showError = (error) => (
    <div
      className='alert alert-danger'
      style=***REMOVED******REMOVED*** display: error ? '' : 'none' }}
    >
      ***REMOVED***error}
    </div>
  );

  const showSuccess = (success) => (
    <div
      className='alert alert-info'
      style=***REMOVED******REMOVED*** display: success ? '' : 'none' }}
    >
      Thanks! Your payment was successful!
    </div>
  );

  const showLoading = (loading) =>
    loading && <h2 className='text-danger'>Loading...</h2>;

  return (
    <div>
      <h2>Total: $***REMOVED***getTotal()}</h2>
      ***REMOVED***showLoading(data.loading)}
      ***REMOVED***showSuccess(data.success)}
      ***REMOVED***showError(data.error)}
      ***REMOVED***showCheckout()}
    </div>
  );
};

export default Checkout;
