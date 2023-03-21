import React, ***REMOVED*** useState ***REMOVED***from 'react';
import ***REMOVED*** Link ***REMOVED***from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import ***REMOVED*** makeStyles ***REMOVED***from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Layout from '../core/Layout';
import ***REMOVED*** signup ***REMOVED***from '../auth';

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

export default function Signup() ***REMOVED***
  const [values, setValues] = useState(***REMOVED***
    name: '',
    email: '',
    password: '',
    error: '',
    success: false,
  });

  const ***REMOVED*** name, email, password, success, error ***REMOVED***= values;

  const handleChange = (name) => (event) => ***REMOVED***
    setValues(***REMOVED*** ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => ***REMOVED***
    event.preventDefault(); // so that browser does not reload
    setValues(***REMOVED*** ...values, error: false });
    signup(***REMOVED*** name, email, password }).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setValues(***REMOVED*** ...values, error: data.error, success: false });
      ***REMOVED***else ***REMOVED***
        setValues(***REMOVED***
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true,
        });
      }
    }); // sending js object
  };

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
      style=***REMOVED******REMOVED*** display: success ? '' : 'none' }}
    >
      New account is created. Please <Link to='/signin'>Signin</Link>.
    </div>
  );

  const classes = useStyles();

  const signUpForm = () => (
    <Container component='main' maxWidth='xs'>
      ***REMOVED***showSuccess()}
      ***REMOVED***showError()}
      <CssBaseline />
      <div className=***REMOVED***classes.paper}>
        <Avatar className=***REMOVED***classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className=***REMOVED***classes.form***REMOVED***noValidate>
          <Grid container spacing=***REMOVED***2}>
            <Grid item xs=***REMOVED***12}>
              <TextField
                autoComplete='off'
                onChange=***REMOVED***handleChange('name')}
                type='text'
                name='name'
                value=***REMOVED***name}
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Full Name'
                autoFocus
              />
            </Grid>
            <Grid item xs=***REMOVED***12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange=***REMOVED***handleChange('email')}
                type='email'
                value=***REMOVED***email}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs=***REMOVED***12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                id='password'
                onChange=***REMOVED***handleChange('password')}
                type='password'
                value=***REMOVED***password}
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className=***REMOVED***classes.submit}
            onClick=***REMOVED***clickSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/signin' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );

  return (
    <Layout
      title='Signup page'
      description='Signup to MERN E-commerce App'
      className='container col-md-8 offset-md-2'
    >
      ***REMOVED***signUpForm()}
    </Layout>
  );
}
