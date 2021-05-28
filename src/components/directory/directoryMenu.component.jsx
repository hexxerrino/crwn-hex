import React, { Component } from "react"

import "./directory.menu.component.styles.scss"
import { sections } from "./directory.data"
import { MenuItem } from "../menu-item/menu.item.component"

export class DirectoryMenu extends Component {
    constructor(){
        super()

        this.state = {
            sections: sections
        }
    }

    render() {
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
}