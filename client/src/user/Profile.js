import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from '../core/Layout';
import ***REMOVED*** isAuthenticated ***REMOVED***from '../auth';
import ***REMOVED*** Link, Redirect ***REMOVED***from 'react-router-dom';
import ***REMOVED*** read, update, updateUser ***REMOVED***from './apiUser';

const Profile = (***REMOVED*** match }) => ***REMOVED***
  const [values, setValues] = useState(***REMOVED***
    name: '',
    email: '',
    password: '',
    error: false,
    success: false,
  });

  const ***REMOVED*** token ***REMOVED***= isAuthenticated();
  const ***REMOVED*** name, email, password, error, success ***REMOVED***= values;

  const init = (userId) => ***REMOVED***
    // console.log(userId);
    read(userId, token).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setValues(***REMOVED*** ...values, error: true });
      ***REMOVED***else ***REMOVED***
        setValues(***REMOVED*** ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => ***REMOVED***
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => ***REMOVED***
    setValues(***REMOVED*** ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => ***REMOVED***
    e.preventDefault();
    update(match.params.userId, token, ***REMOVED*** name, email, password }).then(
      (data) => ***REMOVED***
        if (data.error) ***REMOVED***
          // console.log(data.error);
          alert(data.error);
        ***REMOVED***else ***REMOVED***
          updateUser(data, () => ***REMOVED***
            setValues(***REMOVED***
              ...values,
              name: data.name,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };

  const redirectUser = (success) => ***REMOVED***
    if (success) ***REMOVED***
      return <Redirect to='/user/dashboard' />;
    }
  };

  const profileUpdate = (name, email, password) => (
    <form>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input
          type='text'
          onChange=***REMOVED***handleChange('name')}
          className='form-control'
          value=***REMOVED***name}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Email</label>
        <input
          type='email'
          onChange=***REMOVED***handleChange('email')}
          className='form-control'
          value=***REMOVED***email}
        />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Password</label>
        <input
          type='password'
          onChange=***REMOVED***handleChange('password')}
          className='form-control'
          value=***REMOVED***password}
        />
      </div>

      <button onClick=***REMOVED***clickSubmit***REMOVED***className='btn btn-primary'>
        Submit
      </button>
    </form>
  );

  return (
    <Layout
      title='Profile'
      description='Update your profile'
      className='container-fluid'
    >
      <h2 className='mb-4'>Profile update</h2>
      ***REMOVED***profileUpdate(name, email, password)}
      ***REMOVED***redirectUser(success)}
    </Layout>
  );
};

export default Profile;
