import { connect } from "react-redux"

import { CategoryPage } from "../pages/category-page/category-page"

import { selectorFromCategorySelector } from "../redux/selectors/shop-data-selectors"

const mapStateToProps = (state, ownProps) => {
    return {
        category: selectorFromCategorySelector(ownProps.match.params.category)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage)