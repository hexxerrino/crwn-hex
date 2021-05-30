import React from "react"

import "./category-styles.scss"

import CollectionItem from "../../containers/collection-item.container"

export const CategoryPage = ({category: {items, title}}) => {
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}