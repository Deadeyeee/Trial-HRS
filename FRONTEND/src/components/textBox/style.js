import styled from "styled-components";
export const  TextInput = styled.input`
    width: ${(props) => (props.w ? props.w : "300px")};
    height: ${(props) => (props.h ? props.h : "35px")};
    margin: ${(props) => (props.margins ? props.margins : "20px 0px 0px 0px")};
    outline: ${(props) => (props.outline ? props.outline : "0")};
    text-align: ${(props) => (props.align ? props.align : "left")};
    border-width: 0 0 2px;
    border-color: #8F805F;
    font-size: 14px;
    border-radius: ${(props) => (props.radius ? props.radius : "0px")};
    font-family: arial;
    &:focus{
        border-radius: 0px;
        border-width: 0 0 2px;
        border-color: black;
        background-color: #E7E7E7;
    }
`;