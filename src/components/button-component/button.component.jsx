import React from "react"

import { CustomButton } from "./button.styles"

export const ButtonComponent = ({children, ...otherProps}) => {
    return (
            <CustomButton {...otherProps}> {children} </CustomButton>
    )
}