import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.primary.white};
  border-radius: 0.625rem;

  width: 100%;
  height: 25rem;
  padding: 1.5rem;
`;

const FeedbackCard = ({ title }) => {
  return <Container>{title}</Container>;
};

export default FeedbackCard;
