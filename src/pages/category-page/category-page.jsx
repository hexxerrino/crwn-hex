import React from "react"

import { 
    StyledCategoryPage,
    Title,
    Items,
} from "./category-styles"

import CollectionItem from "../../containers/collection-item.container"

export const CategoryPage = ({category: {items, title}}) => {
    return (
        <StyledCategoryPage>
            <Title>{title}</Title>
            <Items>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </Items>
        </StyledCategoryPage>
    )
}