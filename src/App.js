import React, {Component} from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import "./App.css"

import Header from "./containers/headerContainer"
import { HomePage } from "./pages/homePage.component"
import GeneralShop from "./containers/generalShop.container"
import { LoginRegisterPage } from "./pages/login-and-register/login-and-register.page"
import CheckoutPage from './containers/checkout-page.container';

class App extends Component {

  componentDidMount() {
    this.props.updateUser()
  }

  render() {
    return (
    <div>
    <Header />
      <Switch> 
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop" component={GeneralShop} />
        <Route path="/auth">
          <LoginRegisterPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>  
    </div>
    )
  }
}

export default App
