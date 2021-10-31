import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: ${({ theme }) => theme.primary.grey};
  border-radius: 0.625rem;
  border: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.primary.blue};

  width: fit-content;
  padding: 0.5rem 1rem;
`;

const Tag = ({ category }) => {
  const capitalizeTag = word => {
    /**
     * Take the category and capitalize the first letter
     */
    const arr = word.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
  };

  return <Container>{capitalizeTag(category)}</Container>;
};

export default Tag;
