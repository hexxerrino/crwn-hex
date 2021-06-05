import { connect } from "react-redux"

import { CategoryPage } from "../pages/category-page/category-page"

import { selectorFromCategorySelector } from "../redux/selectors/shop-data-selectors"

import WithSpinner from "../components/with-spinner/with-spinner.component"

const mapStateToProps = (state, ownProps) => {
    return {
        category: selectorFromCategorySelector(ownProps.match.params.category)(state)
    }
}

export default WithSpinner(connect(mapStateToProps)(CategoryPage))