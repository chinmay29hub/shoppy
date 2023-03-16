import React, ***REMOVED*** Fragment ***REMOVED***from 'react';
import Layout from './Layout';
import Copyright from './Copyright';
import WarningIcon from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';

const NotFound = () => ***REMOVED***
  return (
    <Layout
      title='Error: 404'
      description='Page Not Found'
      className='container-fluid'
    >
      <Typography variant='h3' gutterBottom>
        <WarningIcon style=***REMOVED******REMOVED*** fontSize: 50, color: '#FF7D00' }***REMOVED***/> Sorry, this page does not
        exist!
      </Typography>
      <Copyright />
    </Layout>
  );
};

export default NotFound;
