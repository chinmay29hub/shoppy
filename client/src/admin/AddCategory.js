import React, ***REMOVED*** useState ***REMOVED***from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import ***REMOVED*** createCategory ***REMOVED***from './apiAdmin';

const AddCategory = () => ***REMOVED***
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const ***REMOVED*** user, token ***REMOVED***= isAuthenticated();

  const handleChange = (e) => ***REMOVED***
    setError('');
    setName(e.target.value);
  };

  const clickSubmit = (e) => ***REMOVED***
    e.preventDefault();
    setError('');
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, ***REMOVED*** name }).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setError('');
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit=***REMOVED***clickSubmit}>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          type='text'
          className='form-control'
          onChange=***REMOVED***handleChange}
          value=***REMOVED***name}
          autoFocus
          required
        />
      </div>
      <button className='btn btn-outline-primary'>Create Category</button>
    </form>
  );

  const showSuccess = () => ***REMOVED***
    if (success) ***REMOVED***
      return <h3 className='text-success'>***REMOVED***name***REMOVED***is created</h3>;
    }
  };

  const showError = () => ***REMOVED***
    if (error) ***REMOVED***
      return <h3 className='text-danger'>Category should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className='mt-5'>
      <Link to='/admin/dashboard' className='text-warning'>
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title='Add a new category'
      description=***REMOVED***`Hey $***REMOVED***user.name}, ready to add a new category?`}
    >
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          ***REMOVED***showSuccess()}
          ***REMOVED***showError()}
          ***REMOVED***newCategoryForm()}
          ***REMOVED***goBack()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
