import React from "react"

import { HighlightBox } from "../highlight-box/highlightBox.component"

export const ShopOverview = ({shopData}) => {
    return (
        <div>
            {shopData.map((category) => {return <HighlightBox key={category.id} {...category}/>})}
        </div>
    )
}
