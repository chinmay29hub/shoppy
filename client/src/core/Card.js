import React, ***REMOVED*** useState ***REMOVED***from 'react';
import ***REMOVED*** Redirect ***REMOVED***from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CardM from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ***REMOVED*** makeStyles ***REMOVED***from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import ***REMOVED*** addItem, updateItem, removeItem ***REMOVED***from './cartHelpers';

const useStyles = makeStyles((theme) => (***REMOVED***
  icon: ***REMOVED***
    marginRight: theme.spacing(2),
  },
  heroContent: ***REMOVED***
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: ***REMOVED***
    marginTop: theme.spacing(4),
  },
  cardGrid: ***REMOVED***
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: ***REMOVED***
    borderRadius: "1rem",
    boxShadow: "none",
    border: "0.05rem solid lightgray",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: ***REMOVED***
    paddingTop: '56.25%', // 16:9
  },
  cardContent: ***REMOVED***
    flexGrow: 1,
  },
  productDescription: ***REMOVED***
    height: '100px',
  },
  footer: ***REMOVED***
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Card = (***REMOVED***
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f, // default value of function
  run = undefined, // default value of undefined
}) => ***REMOVED***
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = (showViewProductButton) => ***REMOVED***
    return (
      showViewProductButton && (
        <Link href=***REMOVED***`/product/$***REMOVED***product._id}`***REMOVED***className='mr-2'>
          <Button variant='contained' color='primary'>
            View Product
          </Button>
        </Link>
      )
    );
  };

  const addToCart = () => ***REMOVED***
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => ***REMOVED***
    if (redirect) ***REMOVED***
      return <Redirect to='/cart' />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => ***REMOVED***
    return (
      showAddToCartButton && (
        <Button onClick=***REMOVED***addToCart***REMOVED***variant='outlined' color='secondary'>
          Add to cart
        </Button>
      )
    );
  };

  const showStock = (quantity) => ***REMOVED***
    return quantity > 0 ? (
      <span className='badge badge-primary badge-pill'>In Stock </span>
    ) : (
      <span className='badge badge-primary badge-pill'>Out of Stock </span>
    );
  };

  const handleChange = (productId) => (event) => ***REMOVED***
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) ***REMOVED***
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => ***REMOVED***
    return (
      cartUpdate && (
        <div className='mt-2'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Adjust Quantity</span>
            </div>
            <input
              type='number'
              className='form-control'
              value=***REMOVED***count}
              onChange=***REMOVED***handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };

  const showRemoveButton = (showRemoveProductButton) => ***REMOVED***
    return (
      showRemoveProductButton && (
        <Button
          onClick=***REMOVED***() => ***REMOVED***
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          variant='contained'
          color='secondary'
          className=***REMOVED***classes.button}
          startIcon=***REMOVED***<DeleteIcon />}
        >
          Remove Product
        </Button>
      )
    );
  };

  const classes = useStyles();

  return (
    // <div className='card'>
    //   <div className='card-header name'>***REMOVED***product.name}</div>
    //   <div className='card-body'>
    //     ***REMOVED***shouldRedirect(redirect)}
    //     <ShowImage item=***REMOVED***product***REMOVED***url='product' />
    //     <p className='lead mt-2'>***REMOVED***product.description.substring(0, 100)}</p>
    //     <p className='black-10'>$***REMOVED***product.price}</p>
    //     <p className='black-9'>
    //       Category: ***REMOVED***product.category && product.category.name}
    //     </p>
    //     <p className='black-8'>
    //       Added on ***REMOVED***moment(product.createdAt).fromNow()}
    //     </p>

    //     ***REMOVED***showStock(product.quantity)}
    //     <br></br>

    //     ***REMOVED***showViewButton(showViewProductButton)}

    //     ***REMOVED***showAddToCartBtn(showAddToCartButton)}

    //     ***REMOVED***showRemoveButton(showRemoveProductButton)}

    //     ***REMOVED***showCartUpdateOptions(cartUpdate)}
    //   </div>
    // </div>

    <Container className=***REMOVED***classes.cardGrid***REMOVED***maxWidth='md'>
      <CssBaseline />
      <Grid container spacing=***REMOVED***2}>
        <Grid item xs=***REMOVED***12***REMOVED***sm=***REMOVED***12***REMOVED***md=***REMOVED***12}>
          <CardM className=***REMOVED***classes.card}>
            ***REMOVED***shouldRedirect(redirect)}
            <ShowImage item=***REMOVED***product***REMOVED***url='product' />
            <CardContent className=***REMOVED***classes.cardContent}>
              <Typography gutterBottom variant='h5' component='h2'>
                ***REMOVED***product.name}
              </Typography>
              <Typography className=***REMOVED***classes.productDescription}>***REMOVED***product.description.substring(0, 100)}</Typography>
              <p className='black-10'>Price: $***REMOVED***product.price}</p>
              <p className='black-9'>
                Category: ***REMOVED***product.category && product.category.name}***REMOVED***' '}
              </p>***REMOVED***' '}
              <p className='black-8'>
                Added on ***REMOVED***moment(product.createdAt).fromNow()}***REMOVED***' '}
              </p>
              ***REMOVED***showStock(product.quantity)}
              <br></br>
              <span>
                ***REMOVED***showViewButton(showViewProductButton)}
                ***REMOVED***showAddToCartBtn(showAddToCartButton)}
                ***REMOVED***showRemoveButton(showRemoveProductButton)}
              </span>
              ***REMOVED***showCartUpdateOptions(cartUpdate)}
            </CardContent>
          </CardM>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Card;
