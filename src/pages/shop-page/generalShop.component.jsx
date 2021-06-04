import React, { Component } from "react"

import {
    Route,
    Switch
  } from "react-router-dom";

import { stateFromDatabase, firestore } from "../../firebase/firebase.config"
import { setShopData } from "../../redux/actions/actions"

import ShopOverview from "../../containers/shop-overview.container"
import CategoryPage from "../../containers/category-page.container"

class GeneralShop extends Component {

    unsubscribe = null

    async componentDidMount() {
        const { dispatch } = this.props

        const colSnapshot = firestore.collection("shopItems")
        this.unsubscribe = colSnapshot.onSnapshot(async (col) => {
            const state = await stateFromDatabase(col)
            dispatch(setShopData(state))
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
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

