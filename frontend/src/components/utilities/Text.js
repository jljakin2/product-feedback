// third-party
import React from "react";
import styled from "styled-components";

// ===== START OF STYLING =====
const Heading1 = styled.h1`
  /* bold */
  opacity: 0.96;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary.text};
  letter-spacing: -0.33px;
`;

const Heading2 = styled.h2`
  /* bold */
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.25px;
`;

const Heading3 = styled.h3`
  /* bold */
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.25px;
`;

const Heading4 = styled.h4`
  /* bold */
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: -0.19px;
`;

const Body1 = styled.p`
  /* regular */
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
`;

const Body2 = styled.p`
  /* regular */
  font-size: 0.9375rem;
  font-weight: 400;
  letter-spacing: 0;
`;

const Body3 = styled.p`
  /* semi-bold */
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0;
`;

// ===== END OF STYLING =====

const Text = ({ type, children, color, opacity }) => {
  const style = {
    color: color ? color : "",
    opacity: opacity ? opacity : "1",
  };

  // check which type of text is requested and return with the stylings outlined above
  switch (type) {
    case "heading1":
      return <Heading1 style={style}>{children}</Heading1>;

    case "heading2":
      return <Heading2 style={style}>{children}</Heading2>;

    case "heading3":
      return <Heading3 style={style}>{children}</Heading3>;

    case "heading4":
      return <Heading4 style={style}>{children}</Heading4>;

    case "body1":
      return <Body1 style={style}>{children}</Body1>;

    case "body2":
      return <Body2 style={style}>{children}</Body2>;

    case "body3":
      return <Body3 style={style}>{children}</Body3>;

    default:
      break;
  }
};

export default Text;
