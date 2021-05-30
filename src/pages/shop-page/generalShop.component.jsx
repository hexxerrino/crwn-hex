import React from "react"

import {
    Route,
    Switch
  } from "react-router-dom";

import ShopOverview from "../../containers/shop-overview.container"
import CategoryPage from "../../containers/category-page.container"

export const GeneralShop = ({ match: {path} }) => {
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <ShopOverview />
            </Route>
            <Route path={`${path}/:category`} component={CategoryPage} />
        </Switch>
    )
}

