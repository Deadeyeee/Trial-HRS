import styled from "styled-components";
export const TextInput = styled.input`
    width: ${(props) => (props.width ? props.width : "300px")};
    height: ${(props) => (props.height ? props.height : "35px")};
    margin: ${(props) => (props.margins ? props.margins : "20px 0px 0px 0px")};
    outline: ${(props) => (props.outline ? props.outline : "0")};
    text-align: ${(props) => (props.align ? props.align : "left")};
    background-color: ${(props) => (props.background ? props.background : "black")};
    padding: ${(props) => (props.padding ? props.padding : "0")};
    placeholder: ${(props) => (props.placeholder ? props.placeholder : "-")};
    border-width: ${(props) => (props.border ? props.border : "0 0 2px")};
    border-color: #8F805F;
    font-size: 14px;
    padding: ${(props) => (props.padding ? props.padding : "auto")};
    border-radius: ${(props) => (props.radius ? props.radius : "0px")};
    font-family: arial;
    &:focus{
        border-radius: ${(props) => (props.radiusFocus ? props.radiusFocus : "0px")};
        border-width: ${(props) => (props.widthFocus ? props.widthFocus : "0 0 2px")};
        border-color: black;
        background-color: #E7E7E7;
    }

`;