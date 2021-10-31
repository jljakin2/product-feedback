import React from "react";
import styled from "styled-components";

import Tag from "./Tag";
import Comments from "./Comments";
import UpvoteIcon from "./UpvoteIcon";

import Text from "./utilities/Text";
import Spacer from "./utilities/Spacer";

const Container = styled.div`
  background: ${({ theme }) => theme.primary.white};
  border-radius: 0.625rem;

  display: grid;
  grid:
    "main main" 2fr
    "upvote comments" 1fr
    / 1fr 1fr;

  width: 100%;
  padding: 1.5rem;
`;

const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
`;

const UpvoteContainer = styled.div`
  background: yellow;

  align-self: center;
  justify-self: start;
  grid-area: upvote;
`;

const CommentsContainer = styled.div`
  background: blue;

  align-self: center;
  justify-self: end;
  grid-area: comments;
`;

const FeedbackCard = ({ title, description, category }) => {
  return (
    <Container>
      <MainContainer>
        <Text type="heading4">{title}</Text>
        <Spacer h="1rem" />
        <Text type="body3" opacity="0.6">
          {description}
        </Text>
        <Spacer h="1rem" />
        <Tag category={category} />
      </MainContainer>

      <UpvoteContainer>
        <UpvoteIcon />
      </UpvoteContainer>

      <CommentsContainer>
        <Comments />
      </CommentsContainer>
    </Container>
  );
};

export default FeedbackCard;
