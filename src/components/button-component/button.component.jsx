import React from "react"

import "./button.styles.scss"

export const ButtonComponent = ({children, ...otherProps}) => {
    return (
            <button className={
                `${otherProps.google ? "google-sign-in" : null}
                 ${otherProps.inverted ? "inverted" : null}
                 custom-button`} 
                 {...otherProps}>
                 {children}
            </button>
    )
}