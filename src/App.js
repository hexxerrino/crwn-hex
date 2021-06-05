import React, {Component} from 'react';

import { userAction } from "./redux/actions/actions"

import {
  Route,
  Switch
} from "react-router-dom";

import "./App.css"

import { auth } from "./firebase/firebase.config"
import { addNewUserIfNewUser } from "./firebase/firebase.config"

import Header from "./containers/headerContainer"
import { HomePage } from "./pages/homePage.component"
import GeneralShop from "./containers/generalShop.container"
import { LoginRegisterPage } from "./pages/login-and-register/login-and-register.page"
import CheckoutPage from './containers/checkout-page.container';

class App extends Component {

  unsubscribe = null

  componentDidMount() {
    const dispatch = this.props.dispatch
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
        const userRef = await addNewUserIfNewUser(user)

        if (user) {
          userRef.onSnapshot((doc) => {
            dispatch(userAction({id: doc.id, ...doc.data()}))
          })
        } else {
          dispatch(userAction({}))
        }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
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
