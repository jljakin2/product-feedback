import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  margin-right: 0.5rem;
`;

const Plus = () => {
  return (
    <StyledSvg width="9" height="9" xmlns="http://www.w3.org/2000/svg">
      <text
        transform="translate(-24 -20)"
        fill="#F2F4FE"
        fillRule="evenodd"
        fontFamily="Jost-Bold, Jost"
        fontSize="14"
        fontWeight="bold">
        <tspan x="24" y="27.5">
          +
        </tspan>
      </text>
    </StyledSvg>
  );
};

export default Plus;
