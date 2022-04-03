import React from 'react';
import { Button } from './styles'
export const Button = (props) => {
    return (
       <Button onClick={props.onClick}></Button>
    )
}

export default Button;