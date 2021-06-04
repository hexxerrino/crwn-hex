import { createSelector } from "reselect"

const shopDataSelector = state => state.shopData

const categorySelector = category => category

export const selectorFromCategorySelector = createSelector(
    categorySelector,
    category => createSelector(
        shopDataSelector,
        (data) => {
            if (data[category]) {
                return data[category]
            } else {
                return {items: []}
            }
        }
        // data => data[category]
    )
)

export const dataForOverviewSelector = createSelector(
    shopDataSelector,
    collections => Object.keys(collections).map(key => collections[key])
)

