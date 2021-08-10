import React from 'react' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {AboutPage, HomePage, ProductsPage, ServicesPage, SkillsPage, ErrorPage} from './page'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/products'>
          <ProductsPage />
        </Route>
        <Route path='/services'>
          <ServicesPage />
        </Route>
        <Route path='/skills'>
          <SkillsPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
