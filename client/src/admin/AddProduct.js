import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import ***REMOVED*** createProduct, getCategories ***REMOVED***from './apiAdmin';

const AddProduct = () => ***REMOVED***
  const [values, setValues] = useState(***REMOVED***
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });

  const ***REMOVED*** user, token ***REMOVED***= isAuthenticated();

  const ***REMOVED***
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  ***REMOVED***= values;

  // load categories and set form data
  const init = () => ***REMOVED***
    getCategories().then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setValues(***REMOVED*** ...values, error: data.error });
      ***REMOVED***else ***REMOVED***
        setValues(***REMOVED***
          ...values,
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => ***REMOVED***
    init();
  }, []);

  const handleChange = (name) => (event) => ***REMOVED***
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues(***REMOVED*** ...values, [name]: value });
  };

  const clickSubmit = (event) => ***REMOVED***
    event.preventDefault();
    setValues(***REMOVED*** ...values, error: '', loading: true });

    createProduct(user._id, token, formData).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setValues(***REMOVED*** ...values, error: data.error });
      ***REMOVED***else ***REMOVED***
        setValues(***REMOVED***
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const newPostForm = () => (
    <form className='mb-3' onSubmit=***REMOVED***clickSubmit}>
      <h4>Post Photo</h4>
      <div className='form-group'>
        <label className='btn btn-secondary'>
          <input
            onChange=***REMOVED***handleChange('photo')}
            type='file'
            name='photo'
            accept='image/*'
          />
        </label>
      </div>

      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          onChange=***REMOVED***handleChange('name')}
          type='text'
          className='form-control'
          value=***REMOVED***name}
        />
      </div>

      <div className='form-group'>
        <label className='text-muted'>Description</label>
        <textarea
          onChange=***REMOVED***handleChange('description')}
          className='form-control'
          value=***REMOVED***description}
        />
      </div>

      <div className='form-group'>
        <label className='text-muted'>Price</label>
        <input
          onChange=***REMOVED***handleChange('price')}
          type='number'
          className='form-control'
          value=***REMOVED***price}
        />
      </div>

      <div className='form-group'>
        <label className='text-muted'>Category</label>
        <select onChange=***REMOVED***handleChange('category')***REMOVED***className='form-control'>
          <option>Please select</option>
          ***REMOVED***categories &&
            categories.map((c, i) => (
              <option key=***REMOVED***i***REMOVED***value=***REMOVED***c._id}>
                ***REMOVED***c.name}
              </option>
            ))}
        </select>
      </div>

      <div className='form-group'>
        <label className='text-muted'>Shipping</label>
        <select onChange=***REMOVED***handleChange('shipping')***REMOVED***className='form-control'>
          <option>Please select</option>
          <option value='0'>No</option>
          <option value='1'>Yes</option>
        </select>
      </div>

      <div className='form-group'>
        <label className='text-muted'>Quantity</label>
        <input
          onChange=***REMOVED***handleChange('quantity')}
          type='number'
          className='form-control'
          value=***REMOVED***quantity}
        />
      </div>

      <button className='btn btn-outline-primary'>Create Product</button>
    </form>
  );

  const showError = () => (
    <div
      className='alert alert-danger'
      style=***REMOVED******REMOVED*** display: error ? '' : 'none' }}
    >
      ***REMOVED***error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style=***REMOVED******REMOVED*** display: createdProduct ? '' : 'none' }}
    >
      <h2>***REMOVED***`$***REMOVED***createdProduct}`***REMOVED***is created!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <Layout
      title='Add a new product'
      description=***REMOVED***`Hey $***REMOVED***user.name}, ready to add a new product?`}
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          ***REMOVED***showLoading()}
          ***REMOVED***showSuccess()}
          ***REMOVED***showError()}
          ***REMOVED***newPostForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
