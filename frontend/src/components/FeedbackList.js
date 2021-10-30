import React from "react";
import styled from "styled-components";

import FeedbackCard from "./FeedbackCard";

import data from "../data/data.json";

const Container = styled.div`
  background: ${({ theme }) => theme.primary.grey};

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  width: 100%;
  padding: ${({ padding }) => `2.5rem ${padding}`};
`;

const FeedbackList = ({ padding }) => {
  const renderedCards = data.productRequests.map(card => (
    <FeedbackCard key={card.id} {...card} />
  ));

  return <Container padding={padding}>{renderedCards}</Container>;
};

export default FeedbackList;
