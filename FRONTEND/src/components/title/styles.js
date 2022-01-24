import styled from "styled-components";

export const Title = styled.h1`
font-family: ${(props) => (props.family ? props.family : "'Playfair Display', serif")};
font-size: ${(props) => (props.size ? props.size : "30px")};
font-weight: ${(props) => (props.weight ? props.weight : "bold")};
text-align: ${(props) => (props.align ? props.align : "center")};;
margin: ${(props) => (props.margin ? props.margin : "0px")};
color: ${(props)=>(props.color? props.color: "black")};
display: ${(props) =>(props.display ? props.display : "block")};
letter-spacing: ${(props) =>(props.spacing ? props.spacing : "1px")};

`;