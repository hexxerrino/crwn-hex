import React, { Component } from "react"

import "./homepage.styles.scss"
import DirectoryMenu from "../containers/directory.container"

export class HomePage extends Component {
    render() {
        return <div className="homepage">
            <DirectoryMenu />
        </div>
    }
}