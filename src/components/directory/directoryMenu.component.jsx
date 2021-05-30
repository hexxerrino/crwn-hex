import React from "react"

import "./directory.menu.component.styles.scss"
import { MenuItem } from "../menu-item/menu.item.component"

export const DirectoryMenu = ({sections}) => {
    return <div className="directory-menu">
        {sections.map((section) => 
        {
            return <MenuItem 
            title={section.title} 
            key={section.id} 
            imgURL={section.imageUrl} 
            size={section.size} 
            linkURL={section.linkUrl}   
            />
        })}
    </div>
}
