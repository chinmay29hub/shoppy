import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Copyright() ***REMOVED***
  return (
    <Box mt=***REMOVED***8***REMOVED***mb=***REMOVED***4}>
      <Typography variant='body2' color='textSecondary' align='center'>
        ***REMOVED***'Copyright © '}
        <Link color='inherit' href='#'>
          Ashraf Kabir
        </Link>***REMOVED***' '}
        ***REMOVED***new Date().getFullYear()}
        ***REMOVED***'.'}
      </Typography>
    </Box>
  );
}
