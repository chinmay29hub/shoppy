import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { addItem, updateItem, removeItem } from './cartHelpers';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    border: "0.05rem solid lightgray",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  productDescription: {
    height: 'max-content',
    margin: "0.6rem 0rem 1rem 0rem"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f, // default value of function
  run = undefined, // default value of undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link href={`/product/${product._id}`} className='mr-2' style={{
          textDecoration: 'none',
        }}>
          <Button style={{
            backgroundColor: "#3579bd",
            color: "white",
            borderRadius: "0.5rem",
            padding: "0.6rem 1.2rem",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}>
            View Product
          </Button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <Button onClick={addToCart} style={{
          position: "absolute",
          right: "0",
          border: "0.1rem solid #3579bd",
          backgroundColor: "white",
          color: "#3579bd",
          borderRadius: "0.5rem",
          padding: "0.4rem 0.8rem",
          outline: "none",
          boxShadow: "none",
          margin: "0rem 3.5rem 0rem 0rem"
        }}>
          Add to cart
        </Button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <Button style={{
        position: "absolute",
        right: "0",
        backgroundColor: "#b6eee7",
        color: "#14534c",
        margin: "0rem 3.5rem 0.5rem 0.5rem",
        textTransform: "none",
        fontWeight: "500",
        borderRadius: "0.5rem",
        padding: "0.3rem 0.9rem",
        fontSize: "1rem",
        outline: "none",
        hover: "none"
      }}>In Stock </Button>
    ) : (
      <Button style={{
        position: "absolute",
        right: "0",
        backgroundColor: "#ffb5b5",
        color: "#4d0909",
        margin: "0rem 3.5rem 0.5rem 0.5rem",
        textTransform: "none",
        fontWeight: "500",
        borderRadius: "0.5rem",
        padding: "0.3rem 0.9rem",
        fontSize: "1rem",
        outline: "none",
        hover: "none"
      }}>Out of Stock </Button>);
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div className='mt-2'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend' style={{
              margin: "0.5rem 0rem 0rem 0rem",
              borderRight: "none"
            }}>
              <span className='input-group-text' style={{
                borderRadius: "0.4rem 0rem 0rem 0.4rem ",
              }}>Adjust Quantity</span>
            </div>
            <input
              type='number'
              className='form-control'
              value={count}
              onChange={handleChange(product._id)}
              style={{
                borderLeft: "none",
                borderRadius: "0rem 0.4rem 0.4rem 0rem ",
                margin: "0.5rem 0rem 0rem 0rem"
              }}
            />
          </div>
        </div>
      )
    );
  };

  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <Button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          variant='contained'
          color='secondary'
          className={classes.button}
          startIcon={<DeleteIcon />}
          style={{
            position: "absolute",
            right: "0",
            marginRight: "3.5rem",
            // backgroundColor: "#3579bd",
            // color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "0.5rem",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        >
          Remove Product
        </Button>
      )
    );
  };

  const classes = useStyles();

  return (
    // <div className='card'>
    //   <div className='card-header name'>{product.name}</div>
    //   <div className='card-body'>
    //     {shouldRedirect(redirect)}
    //     <ShowImage item={product} url='product' />
    //     <p className='lead mt-2'>{product.description.substring(0, 100)}</p>
    //     <p className='black-10'>${product.price}</p>
    //     <p className='black-9'>
    //       Category: {product.category && product.category.name}
    //     </p>
    //     <p className='black-8'>
    //       Added on {moment(product.createdAt).fromNow()}
    //     </p>

    //     {showStock(product.quantity)}
    //     <br></br>

    //     {showViewButton(showViewProductButton)}

    //     {showAddToCartBtn(showAddToCartButton)}

    //     {showRemoveButton(showRemoveProductButton)}

    //     {showCartUpdateOptions(cartUpdate)}
    //   </div>
    // </div>

    <Container className={classes.cardGrid} maxWidth='md'>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <CardM className={classes.card}>
            {shouldRedirect(redirect)}
            <ShowImage item={product} url='product' />
            <CardContent className={classes.cardContent}>
              <div style={{
                display: "flex",
                padding: 0
              }}>
                <Row style={{
                  width: "100%",
                  margin: 0,
                  display: "flex",
                  alignItems: "center"
                }}>
                  <Col style={{
                    flex: 1
                  }}>
                    <Typography gutterBottom variant='h5' component='h2' style={{
                      fontFamily: "Qanelas-Medium",
                      fontWeight: "700",
                      margin: "0.6rem 0rem 0.6rem -.75rem",
                    }}>
                      {product.name}
                    </Typography>
                  </Col>
                  <Col className="col-3" style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    width: "auto",
                  }}>
                    <p style={{
                      justifyContent: "flex-end",
                      width: "max-content",
                      fontFamily: "Qanelas-Black",
                      fontSize: "1.6rem",
                      margin: "0",
                      padding: "0",
                    }}>₹{product.price}</p>
                  </Col>
                </Row>

                {/* <Row style={{
                  backgroundColor: "red",
                  width: "100%",
                  margin: 0
                }}>
                  <Col style={{
                    backgroundColor: "green",
                    width: "100%"
                  }}>
                    <Typography gutterBottom variant='h5' component='h2' style={{
                      fontFamily: "Qanelas-Medium",
                      fontWeight: "700",
                      width: "100%",
                      margin: "0.25rem 0rem 0.3rem 0rem",
                    }}>
                      {product.name}
                    </Typography>
                  </Col>
                  <Col style={{
                    width: "max-content",
                    backgroundColor: "yellow"
                  }}>
                    <p style={{
                      width: "max-content",
                      fontFamily: "Qanelas-Black",
                      fontSize: "1.8rem",
                      margin: "0"
                    }}>₹{product.price}</p>
                  </Col>
                </Row> */}
              </div>
              <div style={{
                display: "flex"
              }}>
                <Button className='prod-categ' style={{
                  backgroundColor: "#b5d5ff",
                  marginBottom: "0.5rem",
                  textTransform: "none",
                  color: "#09264d",
                  fontWeight: "500",
                  borderRadius: "0.5rem",
                  padding: "0.3rem 0.9rem",
                  fontSize: "1rem",
                  outline: "none",
                  hover: "none"
                }}>
                  {product.category && product.category.name}{' '}
                </Button>
                {showStock(product.quantity)}
              </div>
              <Typography className={classes.productDescription}>{product.description.substring(0, 100)}</Typography>

              <p style={{
                fontSize: "1rem",
                margin: "0rem 0rem -0.2rem 0rem"
              }}>
                Added {moment(product.createdAt).fromNow()}{'.'}
              </p>
              <br></br>
              <span>
                {showViewButton(showViewProductButton)}
                {showAddToCartBtn(showAddToCartButton)}
                {showRemoveButton(showRemoveProductButton)}
              </span>
              {showCartUpdateOptions(cartUpdate)}
            </CardContent>
          </CardM>
        </Grid>
      </Grid>
    </Container>


    // <Container className={classes.cardGrid} maxWidth='md'>
    //   <CssBaseline />
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={12} md={12}>
    //       <CardM className={classes.card}>
    //         {shouldRedirect(redirect)}
    //         <ShowImage item={product} url='product' />
    //         <CardContent className={classes.cardContent}>
    //           <Typography gutterBottom variant='h5' component='h2'>
    //             {product.name}
    //           </Typography>
    //           <Typography className={classes.productDescription}>{product.description.substring(0, 100)}</Typography>
    //           <p className='black-10'>Price: ${product.price}</p>
    //           <p className='black-9'>
    //             Category: {product.category && product.category.name}{' '}
    //           </p>{' '}
    //           <p className='black-8'>
    //             Added on {moment(product.createdAt).fromNow()}{' '}
    //           </p>
    //           {showStock(product.quantity)}
    //           <br></br>
    //           <span>
    //             {showViewButton(showViewProductButton)}
    //             {showAddToCartBtn(showAddToCartButton)}
    //             {showRemoveButton(showRemoveProductButton)}
    //           </span>
    //           {showCartUpdateOptions(cartUpdate)}
    //         </CardContent>
    //       </CardM>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};

export default Card;