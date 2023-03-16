import React, ***REMOVED*** useState, useEffect ***REMOVED***from 'react';
import Layout from './Layout';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from './Card';
import ***REMOVED*** getCategories, getFilteredProducts ***REMOVED***from './apiCore';
import Checkbox from './Checkbox';
import RadioBox from './RadioBox';
import ***REMOVED*** makeStyles ***REMOVED***from '@material-ui/core/styles';

import Search from './Search';
import ***REMOVED*** prices ***REMOVED***from './fixedPrices';

const Shop = () => ***REMOVED***
  const [myFilters, setMyFilters] = useState(***REMOVED***
    filters: ***REMOVED*** category: [], price: [] },
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => ***REMOVED***
    getCategories().then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => ***REMOVED***
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => ***REMOVED***
    let toSkip = skip + limit;
    // console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then((data) => ***REMOVED***
      if (data.error) ***REMOVED***
        setError(data.error);
      ***REMOVED***else ***REMOVED***
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const useStyles = makeStyles((theme) => (***REMOVED***
    btn: ***REMOVED***
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 20px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  }));

  const classes = useStyles();

  const loadMoreButton = () => ***REMOVED***
    return (
      size > 0 &&
      size >= limit && (
        // <button onClick=***REMOVED***loadMore***REMOVED***className='btn btn-warning mb-5'>
        //   Load more
        // </button>
        <Button onClick=***REMOVED***loadMore***REMOVED***variant='contained' className=***REMOVED***classes.btn}>
          Load more
        </Button>
      )
    );
  };

  useEffect(() => ***REMOVED***
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => ***REMOVED***
    // console.log("SHOP", filters, filterBy);
    const newFilters = ***REMOVED*** ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === 'price') ***REMOVED***
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => ***REMOVED***
    const data = prices;
    let array = [];

    for (let key in data) ***REMOVED***
      if (data[key]._id === parseInt(value)) ***REMOVED***
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <Layout
      title='Shop page'
      description='Search and find books'
      className='container-fluid'
    >
      <Search />
      <h2 className='mb-2'>Products</h2>
      <div className='row'>
        <div className='col-md-3' style=***REMOVED******REMOVED***
          backgroundColor: "white",
          margin: "2rem",
          height: "fit-content",
          padding: "1.4rem",
          borderRadius: "1rem",
          border: "0.01rem solid lightgray"
        }}>
          <p style=***REMOVED******REMOVED***
            color: "#4A5263",
            fontSize: "1.3rem"
          }}>Filter by categories</p>
          <span/>
          <ul style=***REMOVED******REMOVED***
            margin: "0"
          }}>
            <Checkbox
              categories=***REMOVED***categories}
              handleFilters=***REMOVED***(filters) => handleFilters(filters, 'category')}
            />
          </ul>

          <h4>Filter by price range</h4>
          <div>
            <RadioBox
              prices=***REMOVED***prices}
              handleFilters=***REMOVED***(filters) => handleFilters(filters, 'price')}
            />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='row'>
            ***REMOVED***filteredResults.map((product, i) => (
              <div key=***REMOVED***i***REMOVED***className='col-xl-6 col-lg-8 col-md-12 col-sm-12'>
                <Card product=***REMOVED***product***REMOVED***/>
              </div>
            ))}
          </div>
          <hr />
          ***REMOVED***loadMoreButton()}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
