import { createSelector } from "reselect"

const shopDataSelector = state => state.shopData.data

const categorySelector = category => category

export const selectorFromCategorySelector = createSelector(
    categorySelector,
    category => createSelector(
        shopDataSelector,
        data => data ? data[category] : null
        // data => data[category]
    )
)

export const dataForOverviewSelector = createSelector(
    shopDataSelector,
    collections => collections ? Object.keys(collections).map(key => collections[key]) : null
)

