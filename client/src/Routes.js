import React from 'react';
import ***REMOVED*** BrowserRouter, Switch, Route ***REMOVED***from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import NotFound from './core/NotFound';
import Chatbot from './core/Chatbot';

const Routes = () => ***REMOVED***
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component=***REMOVED***Home***REMOVED***exact />
        <Route path='/shop' component=***REMOVED***Shop***REMOVED***exact />
        <Route path='/signin' component=***REMOVED***Signin***REMOVED***exact />
        <Route path='/signup' component=***REMOVED***Signup***REMOVED***exact />
        <Route path='/chat' component=***REMOVED***Chatbot***REMOVED***exact />
        <PrivateRoute path='/user/dashboard' component=***REMOVED***Dashboard***REMOVED***exact />
        <AdminRoute path='/admin/dashboard' component=***REMOVED***AdminDashboard***REMOVED***exact />
        <AdminRoute path='/create/category' component=***REMOVED***AddCategory***REMOVED***exact />
        <AdminRoute path='/create/product' component=***REMOVED***AddProduct***REMOVED***exact />
        <Route path='/product/:productId' component=***REMOVED***Product***REMOVED***exact />
        <Route path='/cart' component=***REMOVED***Cart***REMOVED***exact />
        <AdminRoute path='/admin/orders' component=***REMOVED***Orders***REMOVED***exact />
        <PrivateRoute path='/profile/:userId' component=***REMOVED***Profile***REMOVED***exact />
        <AdminRoute path='/admin/products' component=***REMOVED***ManageProducts***REMOVED***exact />
        <AdminRoute
          path='/admin/product/update/:productId'
          component=***REMOVED***UpdateProduct}
          exact
        />
        <Route component=***REMOVED***NotFound***REMOVED***/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
