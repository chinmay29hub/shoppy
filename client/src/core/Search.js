import React, { useState, useEffect } from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Form, FormLabel } from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { getCategories, list } from './apiCore';
import Card from './Card';
import './Search.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tField: {
    width: 800,
    marginTop: 2,
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: '',
    search: '',
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchData = () => {
    // console.log(search, category);
    if (search) {
      list({ search: search || undefined, category: category }).then(
        (response) => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return `Found ${results.length} products`;
    }
    if (searched && results.length < 1) {
      return `Search: No products found`;
    }
  };

  const searchedProducts = (results = []) => {
    return (
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <h2 className='mt-4 mb-4 text-center'>{searchMessage(searched, results)}</h2>
          <div className='row'>
            {results.map((product, i) => (
              <div className='col-md-8 mb-3'>
                <Card key={i} product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
    );
  };

  const classes = useStyles();

  const searchForm = () => (
    <Form onSubmit={searchSubmit} className={classes.root} style={{
      border: "0.01rem solid lightgray",
      backgroundColor: "white",
      borderRadius: "0.8rem",
      width: "max-content",
    }}>
      <FormControl className={classes.formControl} style={{
        margin: 0,
        padding: "1rem 1.2rem"
      }}>
        <Row style={{
          margin: 0,
          padding: 0
        }}>
          <Dropdown style={{
            width: "max-content",
            margin: "0rem 1rem 0rem 0rem"
          }}>
            <Dropdown.Toggle id="dropdown-basic" style={{
              backgroundColor: "white",
              color: "#6D7487",
              border: "0.01rem solid lightgray",
              borderRadius: "0.5rem",
              height: "3rem",
            }}>
              <img src={require('../assets/filter.png')} style={{
                width: "1.5rem"
              }}></img>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item disabled="true">Select Category</Dropdown.Item>
              {categories.map((c, i) => {
                return (
                  <Dropdown.Item key={i} style={{
                    height: "max-content",
                    padding: "0.2rem 0rem -1rem 0rem"
                  }}>
                    <p>{c.name}</p>
                  </Dropdown.Item>)
              })}
            </Dropdown.Menu>
          </Dropdown>
          <input
            type="input"
            onChange={handleChange('search')}
            id='outlined-basic'
            variant='outlined'
            className={classes.tField}
            autoComplete='off'
            placeholder="Search Product"
            style={{
              border: "0.01rem solid lightgray",
              width: "15rem",
              height: "3rem",
              fontSize: "1rem",
              borderRadius: "0.6rem",
              padding: "0rem 1rem",
              outline: "none",
              margin: "0rem 1rem 0rem 0rem"
            }}
          />
          <Button ml={2} variant='contained' color='primary' type='submit' style={{
            backgroundColor: "white",
            color: "#6D7487",
            border: "0.01rem solid lightgray",
            borderRadius: "0.5rem",
            boxShadow: "none",
            height: "3rem",
            outline: "none",
            textTransform: "none",
            padding: "0.6rem 0rem",
            marginRight: "0",
            fontSize: "1rem"
          }}>
            <SearchIcon />
          </Button>
        </Row>
      </FormControl>
    </Form>
  );
  return (
    <div className='row'>
      <div className='container mb-3'>{searchForm()}</div>
      <div className='container-fluid mb-3'>{searchedProducts(results)}</div>
    </div>
  );
};

export default Search;
