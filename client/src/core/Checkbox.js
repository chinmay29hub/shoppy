import React, ***REMOVED*** useState ***REMOVED***from 'react';
import CheckboxM from '@material-ui/core/Checkbox';

const Checkbox = (***REMOVED*** categories, handleFilters }) => ***REMOVED***
  const [checked, setCheked] = useState([]);

  const handleToggle = (c) => () => ***REMOVED***
    // return the first index or -1
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    // if currently checked was not already in checked state > push
    // else pull/take off
    if (currentCategoryId === -1) ***REMOVED***
      newCheckedCategoryId.push(c);
    ***REMOVED***else ***REMOVED***
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }
    // console.log(newCheckedCategoryId);
    setCheked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId);
  };

  return categories.map((c, i) => (
    <li key=***REMOVED***i***REMOVED***className='list-unstyled'>
      <CheckboxM
        onChange=***REMOVED***handleToggle(c._id)}
        value=***REMOVED***checked.indexOf(c._id === -1)}
      />
      <label className='form-check-label'>***REMOVED***c.name}</label>
    </li>
  ));
};

export default Checkbox;
