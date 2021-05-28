import React from "react"

import { useHistory } from "react-router-dom"


import "./menu.item.styles.scss"
import { ItemContent } from "../item-content/item.content.component"

export const MenuItem = ({title, imgURL, size, linkURL}) => {
    const history = useHistory()

    return <div className={`${size} menu-item`} onClick={() => {history.push(`${linkURL}`)}}>
        <div
            className='background-image'
            style={{
            backgroundImage: `url(${imgURL})`
            }}
        />
        <ItemContent title={title} />
    </div>
}