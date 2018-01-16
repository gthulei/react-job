import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from 'containers/Login';
import Register from 'containers/Register';
import UserInfo from 'containers/UserInfo';
import AuthRouter from "components/AuthRouter";
import Home from "containers/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/userInfo/:id' component={UserInfo}></Route>
          <Route path='/home/:id' component={Home}></Route>
          <Route component={Login}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Router;