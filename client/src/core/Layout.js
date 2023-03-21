import React from 'react';
import Menu from './Menu';
import '../styles.css';

const Layout = (***REMOVED***
  title = 'Title',
  description = 'Description',
  className,
  children,
}) => (
  <div>
    <Menu />
    <div className='jumbotron mt-5'>
      <h2>***REMOVED***title}</h2>
      <p className='lead'>***REMOVED***description}</p>
    </div>
    <div className=***REMOVED***className}>***REMOVED***children}</div>
  </div>
);

export default Layout;
