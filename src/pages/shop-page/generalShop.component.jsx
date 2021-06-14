import React, { Component } from "react"

import {
    Route,
    Switch
  } from "react-router-dom";

import ShopOverview from "../../containers/shop-overview.container"
import CategoryPage from "../../containers/category-page.container"

class GeneralShop extends Component {

    componentDidMount() {
        this.props.getShopData()
    }

    render() {
        const { path } = this.props.match
        const shopData = this.props.shopData
        return (
            <Switch>
                <Route exact path={`${path}`} component={ShopOverview} />
                <Route path={`${path}/:category`} render={
                    (props) => <CategoryPage {...props} isLoading={!shopData} />
                } /> 
            </Switch>
        )
    }
}

export default GeneralShop

