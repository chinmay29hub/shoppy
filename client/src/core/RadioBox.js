import React, ***REMOVED*** useState ***REMOVED***from 'react';
import Radio from '@material-ui/core/Radio';

const RadioBox = (***REMOVED*** prices, handleFilters }) => ***REMOVED***
  const [value, setValue] = useState(0);

  const handleChange = (event) => ***REMOVED***
    handleFilters(event.target.value);
    setValue(event.target.value);
  };

  return prices.map((p, i) => (
    <div className='ml-5' key=***REMOVED***i}>
      <Radio
        checked=***REMOVED***value === `$***REMOVED***p._id}`}
        onChange=***REMOVED***handleChange}
        value=***REMOVED***`$***REMOVED***p._id}`}
        name=***REMOVED***p}
        inputProps=***REMOVED******REMOVED*** 'aria-label': 'A' }}
      />
      <label className='form-check-label'>***REMOVED***p.name}</label>
    </div>
  ));
};

export default RadioBox;
