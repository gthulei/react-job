import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from 'containers/Login'
import Register from 'containers/Register'
import UserInfo from 'containers/UserInfo'
import AuthRouter from "../components/AuthRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <AuthRouter/>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/userInfo' component={UserInfo}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Router;