import React, ***REMOVED*** useState ***REMOVED***from 'react';
import ***REMOVED*** Redirect, Link ***REMOVED***from 'react-router-dom';
import Layout from '../core/Layout';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import ***REMOVED*** makeStyles ***REMOVED***from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../core/Copyright';
import ***REMOVED*** signin, authenticate, isAuthenticated ***REMOVED***from '../auth';

const useStyles = makeStyles((theme) => (***REMOVED***
  paper: ***REMOVED***
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: ***REMOVED***
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: ***REMOVED***
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: ***REMOVED***
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() ***REMOVED***
  const [values, setValues] = useState(***REMOVED***
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  const ***REMOVED*** email, password, loading, error, redirectToReferrer ***REMOVED***= values;
  const ***REMOVED*** user ***REMOVED***= isAuthenticated();

  const handleChange = (name) => (event) => ***REMOVED***
    setValues(***REMOVED*** ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => ***REMOVED***
    event.preventDefault(); // so that browser does not reload
    setValues(***REMOVED*** ...values, error: false, loading: true });
    signin(***REMOVED*** email, password }).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setValues(***REMOVED*** ...values, error: data.error, loading: false });
      ***REMOVED***else ***REMOVED***
        authenticate(data, () => ***REMOVED***
          setValues(***REMOVED***
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style=***REMOVED******REMOVED*** display: error ? '' : 'none' }}
    >
      ***REMOVED***error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='alert alert-info'>
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => ***REMOVED***
    if (redirectToReferrer) ***REMOVED***
      if (user && user.role === 1) ***REMOVED***
        return <Redirect to='/admin/dashboard' />;
      ***REMOVED***else ***REMOVED***
        return <Redirect to='/user/dashboard' />;
      }
    }
    if (isAuthenticated()) ***REMOVED***
      return <Redirect to='/' />;
    }
  };

  const classes = useStyles();

  const signInForm = () => (
    <Container component='main' maxWidth='xs'>
      ***REMOVED***showError()}
      ***REMOVED***showLoading()}
      ***REMOVED***redirectUser()}
      <CssBaseline />
      <div className=***REMOVED***classes.paper}>
        <Avatar className=***REMOVED***classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className=***REMOVED***classes.form***REMOVED***noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            onChange=***REMOVED***handleChange('email')}
            type='email'
            value=***REMOVED***email}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            onChange=***REMOVED***handleChange('password')}
            type='password'
            value=***REMOVED***password}
            autoComplete='current-password'
          />
          <FormControlLabel
            control=***REMOVED***<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            onClick=***REMOVED***clickSubmit}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className=***REMOVED***classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/signup' variant='body2'>
                ***REMOVED***"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );

  return (
    <Layout
      title='Signin page'
      description='Signin to MERN E-commerce App'
      className='container col-md-8 offset-md-2'
    >
      ***REMOVED***signInForm()}
      <Copyright />
    </Layout>
  );
}
