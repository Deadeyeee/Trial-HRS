import React from 'react'
import { TextInput } from './style'
export const TextBox = (props) => {
    return (
        <TextInput type="text" placeholder={props.placeholder} type={props.type}></TextInput>
    )
}


export default TextBox;