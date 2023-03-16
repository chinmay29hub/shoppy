import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import ***REMOVED*** makeStyles, responsiveFontSizes ***REMOVED***from '@material-ui/core/styles';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import ***REMOVED*** Form, FormLabel ***REMOVED***from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ***REMOVED*** getCategories, list ***REMOVED***from './apiCore';
import Card from './Card';
import './Search.css'

const useStyles = makeStyles((theme) => (***REMOVED***
  formControl: ***REMOVED***
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: ***REMOVED***
    marginTop: theme.spacing(2),
  },
  tField: ***REMOVED***
    width: 800,
    marginTop: 2,
  },
  root: ***REMOVED***
    '& > *': ***REMOVED***
      margin: theme.spacing(2),
    },
  },
}));

const Search = () => ***REMOVED***
  const [data, setData] = useState(***REMOVED***
    categories: [],
    category: '',
    search: '',
    results: [],
    searched: false,
  });

  const ***REMOVED*** categories, category, search, results, searched ***REMOVED***= data;

  const loadCategories = () => ***REMOVED***
    getCategories().then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        console.log(data.error);
      ***REMOVED***else ***REMOVED***
        setData(***REMOVED*** ...data, categories: data });
      }
    });
  };

  useEffect(() => ***REMOVED***
    loadCategories();
  }, []);

  const searchData = () => ***REMOVED***
    // console.log(search, category);
    if (search) ***REMOVED***
      list(***REMOVED*** search: search || undefined, category: category }).then(
        (response) => ***REMOVED***
          if (response.error) ***REMOVED***
            console.log(response.error);
          ***REMOVED***else ***REMOVED***
            setData(***REMOVED*** ...data, results: response, searched: true });
          }
        }
      );
    }
  };

  const searchSubmit = (e) => ***REMOVED***
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => ***REMOVED***
    setData(***REMOVED*** ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => ***REMOVED***
    if (searched && results.length > 0) ***REMOVED***
      return `Found $***REMOVED***results.length***REMOVED***products`;
    }
    if (searched && results.length < 1) ***REMOVED***
      return `Search: No products found`;
    }
  };

  const searchedProducts = (results = []) => ***REMOVED***
    return (
      <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <h2 className='mt-4 mb-4 text-center'>***REMOVED***searchMessage(searched, results)}</h2>
          <div className='row'>
            ***REMOVED***results.map((product, i) => (
              <div className='col-md-4 mb-3'>
                <Card key=***REMOVED***i***REMOVED***product=***REMOVED***product***REMOVED***/>
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
    <Form onSubmit=***REMOVED***searchSubmit***REMOVED***className=***REMOVED***classes.root***REMOVED***style=***REMOVED******REMOVED***
      border: "0.01rem solid lightgray",
      backgroundColor: "white",
      borderRadius: "0.8rem",
      width: "max-content",
      padding: "0rem"
    }}>
      <FormControl className=***REMOVED***classes.formControl***REMOVED***style=***REMOVED******REMOVED***
        margin: 0,
        padding: "1rem 1.2rem"
      }}>
        <Row style=***REMOVED******REMOVED***
          margin: 0,
          padding: 0
        }}>
          <Dropdown style=***REMOVED******REMOVED***
            width: "max-content",
            margin: "0rem 1rem 0rem 0rem"
          }}>
            <Dropdown.Toggle id="dropdown-basic" style=***REMOVED******REMOVED***
              backgroundColor: "white",
              color: "#6D7487",
              border: "0.01rem solid lightgray",
              borderRadius: "0.5rem",
              height: "3rem",
            }}>
              <img src=***REMOVED***require('../assets/filter.png')***REMOVED***style=***REMOVED******REMOVED***
                width: "1.5rem"
              }}></img>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item disabled="true">Select Category</Dropdown.Item>
              ***REMOVED***categories.map((c, i) => ***REMOVED***
                return <Dropdown.Item key=***REMOVED***i***REMOVED***value=***REMOVED***c.id***REMOVED***/>
              })}
            </Dropdown.Menu>
          </Dropdown>
          <input
            type="input"
            onChange=***REMOVED***handleChange('search')}
            id='outlined-basic'
            variant='outlined'
            className=***REMOVED***classes.tField}
            autoComplete='off'
            placeholder="Search product"
            style=***REMOVED******REMOVED***
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
          <Button ml=***REMOVED***2***REMOVED***variant='contained' color='primary' type='submit' style=***REMOVED******REMOVED***
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
      <div className='container mb-3'>***REMOVED***searchForm()}</div>
      <div className='container-fluid mb-3'>***REMOVED***searchedProducts(results)}</div>
    </div>
  );
};

export default Search;
