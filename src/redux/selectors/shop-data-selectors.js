import { createSelector } from "reselect"

const shopDataSelector = state => state.shopData

const categorySelector = category => category

export const selectorFromCategorySelector = createSelector(
    categorySelector,
    category => createSelector(
        shopDataSelector,
        data => data.find(cat => cat.routeName === category)
    )
)

