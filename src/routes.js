import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewSpot from './pages/NewSpot'
// 55:53
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/user/dashboard" exact component={Dashboard} />
        <Route path="/user/dashboard/spot/novo" exact component={NewSpot} />
      </Switch>
    </BrowserRouter>
  )
}