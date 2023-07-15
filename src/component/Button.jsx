import React from "react";
import styled from "styled-components";

const AppleButton = styled.div`
  background-color: ${(props) =>
    props.type === `function`
      ? `#a5a5a5`
      : props.type === `operator`
      ? `orange`
      : `#333`};
  color: ${(props) => (props.type === `function` ? `black` : `white`)};
  width: ${(props) => (props.wide ? `100px` : `50px`)};
  height: 50px;
  border-radius: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  cursor: pointer;
`;
export default function Button(props) {
  return (
    <AppleButton
      id={props.id}
      wide={props.wide}
      type={props.type}
      onClick={props.handleClick}
    >
      {props.id}
    </AppleButton>
  );
}
