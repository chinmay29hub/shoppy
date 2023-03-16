const reportWebVitals = onPerfEntry => ***REMOVED***
  if (onPerfEntry && onPerfEntry instanceof Function) ***REMOVED***
    import('web-vitals').then((***REMOVED*** getCLS, getFID, getFCP, getLCP, getTTFB }) => ***REMOVED***
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
