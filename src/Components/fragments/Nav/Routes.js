import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { Categories, Home, SearchResults } from '../../../Pages/index'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/categories' component={Categories} />
      <Route exact path='/search-results' component={SearchResults} />
    </Switch>
  )
}

export default Routes
