import React from "react"

import "./input.styles.scss"

export const InputComponent = ({handleChange, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}></input>
            {otherProps.label ? 
            <label 
            className={otherProps.value ? "form-input-label shrink" : "form-input-label"}>{otherProps.label}
            </label> : null}
        </div>
    )
}