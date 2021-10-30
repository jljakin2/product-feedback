import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ color }) => `${color}`};
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
  font-style: inherit;
  font-size: 0.8125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary.white};
  cursor: pointer;

  padding: 0.65625rem 1rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ hover }) => `${hover}`};
  }
`;

const Button = ({ color, children, hover }) => {
  return (
    <StyledButton color={color} hover={hover}>
      {children}
    </StyledButton>
  );
};

export default Button;
