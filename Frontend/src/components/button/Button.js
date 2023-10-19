import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: Poppins;
  color: white;
  font-weight: 500;
  font-size: 16px;
  width: 250px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => (props.primary ? "#573cfa" : "#A3A4FF")};
  margin-bottom: 20px;

  &:active {
    background-color: ${(props) => (props.primary ? "#6C5EFA" : "#D2D3FB")};
  }
`;

export const Button = ({ children, primary }) => {
  const handleClick = () => {
    console.log("elo");
  };

  return (
    <StyledButton onClick={handleClick} primary={primary}>
      {children}
    </StyledButton>
  );
};
