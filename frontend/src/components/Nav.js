import React from "react";
import styled, { withTheme } from "styled-components";

import Text from "./utilities/Text";
import Spacer from "./utilities/Spacer";
import Hamburger from "../icons/Hamburger";

import theme from "../theme/theme";
import backgroundMobile from "../assets/suggestions/mobile/background-header.png";

const Container = styled.div`
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  padding: ${({ padding }) => `2rem ${padding}`};
  /* height: 10rem; */
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = ({ padding }) => {
  return (
    <Container padding={padding}>
      <Content>
        <TextContainer>
          <Text type={"heading2"} color={theme.primary.white}>
            Frontend Mentor
          </Text>
          <Spacer h={"0.5rem"} />
          <Text type={"body2"} color={theme.primary.white}>
            Feedback Board
          </Text>
        </TextContainer>
        <Hamburger />
      </Content>
    </Container>
  );
};

export default withTheme(Nav);
