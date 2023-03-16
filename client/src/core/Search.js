import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';

import ***REMOVED*** makeStyles ***REMOVED***from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import ***REMOVED*** getCategories, list ***REMOVED***from './apiCore';
import Card from './Card';

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
    <form onSubmit=***REMOVED***searchSubmit***REMOVED***className=***REMOVED***classes.root}>
      <span className='input-group-text'>
        <div className='input-group input-group-lg'>
          <div className='input-group-prepend'>
            <FormControl className=***REMOVED***classes.formControl}>
              <InputLabel id='demo-simple-select-helper-label'>
                Select
              </InputLabel>
              <Select
                labelId='demo-simple-select-placeholder-label-label'
                id='demo-simple-select-placeholder-label'
                value=***REMOVED***data.name}
                onChange=***REMOVED***handleChange('category')}
                displayEmpty
                className=***REMOVED***classes.selectEmpty}
              >
                <MenuItem value='All'>
                  <em>All</em>
                </MenuItem>
                ***REMOVED***categories.map((c, i) => (
                  <MenuItem key=***REMOVED***i***REMOVED***value=***REMOVED***c._id}>
                    ***REMOVED***c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <TextField
            onChange=***REMOVED***handleChange('search')}
            id='outlined-basic'
            label=***REMOVED***<span><SearchIcon/>Search by name</span>}
            variant='outlined'
            className=***REMOVED***classes.tField}
            autoComplete='off'
          />

          <div className='ml-3 mt-2' style=***REMOVED******REMOVED*** border: 'none' }}>
            <Button ml=***REMOVED***2***REMOVED***variant='contained' color='primary' type='submit'>
              Search
            </Button>
          </div>
        </div>
      </span>
    </form>
  );

  return (
    <div className='row'>
      <div className='container mb-3'>***REMOVED***searchForm()}</div>
      <div className='container-fluid mb-3'>***REMOVED***searchedProducts(results)}</div>
    </div>
  );
};

export default Search;
