import styled from "styled-components";

export const Description = styled.p`
font-family: ${(props) => (props.family ? props.family : "times new roman")};
font-size: ${(props) => (props.size ? props.size : "12px")};
font-style:${(props) => (props.fontStyle ? props.fontStyle : "normal")};
font-weight: ${(props) => (props.weight ? props.weight : "normal")};
text-align: ${(props) => (props.align ? props.align : "center")};;
margin: ${(props) => (props.margin ? props.margin : "0px")};
color: ${(props) => (props.color ? props.color : "black")};
display: ${(props) => (props.display ? props.display : "block")};
letter-spacing: ${(props) => (props.spacing ? props.spacing : "auto")};
padding: ${(props) => (props.padding ? props.padding : "0px")};
align-self: ${(props) => (props.alignSelf ? props.alignSelf : "auto")};
line-height: ${(props) =>(props.line ? props.line : "auto")};
opacity: ${(props) => (props.opc ? props.opc : "100%")};
text-shadow:  ${(props) => (props.shadow ? props.shadow : "none")};
width:  ${(props) => (props.width ? props.width : "auto")};
`;