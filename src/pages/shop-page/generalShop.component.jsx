import React, { Component } from "react"

import {
    Route,
    Switch
  } from "react-router-dom";

import { stateFromDatabase } from "../../firebase/firebase.config"
import { setShopData } from "../../redux/actions/actions"

import ShopOverview from "../../containers/shop-overview.container"
import CategoryPage from "../../containers/category-page.container"

class GeneralShop extends Component {

    async componentDidMount() {
        const { dispatch } = this.props

        const state = await stateFromDatabase("shopItems")
        dispatch(setShopData(state))
    }

    componentWillUnmount() {

    }

    render() {
        const { path } = this.props.match
        return (
            <Switch>
                <Route exact path={`${path}`}>
                    <ShopOverview />
                </Route>
                <Route path={`${path}/:category`} component={CategoryPage} />
            </Switch>
        )
    }
}

export default GeneralShop

