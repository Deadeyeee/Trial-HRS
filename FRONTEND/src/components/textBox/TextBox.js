import React from 'react'
import { TextInput } from './style'
export const TextBox = (props) => {
    return (
        <TextInput type="text" placeholder={props.placeholder} type={props.type} onChange = {props.onChange}></TextInput>
    )
}


export default TextBox;