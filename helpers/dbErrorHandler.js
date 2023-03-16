'use strict';

/**
 * Get unique error field name
 */
const uniqueMessage = (error) => ***REMOVED***
  let output;
  try ***REMOVED***
    let fieldName = error.message.substring(
      error.message.lastIndexOf('.$') + 2,
      error.message.lastIndexOf('_1')
    );
    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      ' already exists';
  ***REMOVED***catch (ex) ***REMOVED***
    output = 'Unique field already exists';
  }

  return output;
};

/**
 * Get the erroror message from error object
 */
exports.errorHandler = (error) => ***REMOVED***
  let message = '';

  if (error.code) ***REMOVED***
    switch (error.code) ***REMOVED***
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = 'Something went wrong';
    }
  ***REMOVED***else ***REMOVED***
    for (let errorName in error.errorors) ***REMOVED***
      if (error.errorors[errorName].message)
        message = error.errorors[errorName].message;
    }
  }

  return message;
};
