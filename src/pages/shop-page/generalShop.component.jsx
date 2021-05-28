import React, { Component } from "react"

import SHOP_DATA from "./shop.data"

import { HighlightBox } from "../../components/highlight-box/highlightBox.component"

export class GeneralShop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: SHOP_DATA
        }
    }

    render() {
        const {data} = this.state

        return (
            <div>
                {data.map((category) => {return <HighlightBox key={category.id} {...category}/>})}
            </div>
        )
    }
}