import React from "react"

import "./collection-item.styles.scss"

import { ButtonComponent } from "../button-component/button.component"

export const CollectionItem = ({item, onClick}) => {
    const { name, price, imageUrl } = item

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <ButtonComponent onClick={() => {onClick(item)}} inverted="true" >Add to cart</ButtonComponent>
        </div>
    )
}