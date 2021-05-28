import React from "react"

import "./highlightBox.styles.scss"

import CollectionItem from "../../containers/collection-item.container"

export const HighlightBox = ({title, items}) => {
    return (
        <div className="highlight-box">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.slice(0, 4).map((item) => {return <CollectionItem key={item.id} item = {item} />})}
            </div>  
        </div>
    )
}