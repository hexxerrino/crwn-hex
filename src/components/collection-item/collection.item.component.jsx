import React from "react"

import { ButtonComponent } from "../button-component/button.component"

import { 
    StyledCollectionItem,
    StyledImage,
    CollectionFooter,
    StyledName,
    StyledPrice
} from "./collection-item.styles"

export const CollectionItem = ({item, onClick}) => {
    const { name, price, imageUrl } = item

    return (
        <StyledCollectionItem>
            <StyledImage style={{backgroundImage: `url(${imageUrl})`}} />
            <CollectionFooter>
                <StyledName>{name}</StyledName>
                <StyledPrice>{price}</StyledPrice>
            </CollectionFooter>
            <ButtonComponent onClick={() => {onClick(item)}} inverted="true" >Add to cart</ButtonComponent>
        </StyledCollectionItem>
    )
}