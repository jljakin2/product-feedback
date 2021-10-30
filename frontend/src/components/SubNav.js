// Third-Party
import React from "react";
import styled, { withTheme } from "styled-components";
import theme from "../theme/theme";

// Utilities
import Text from "./utilities/Text";

// Components
import Button from "./buttons/Button";
import Plus from "../icons/Plus";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primary.text};

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: ${({ padding }) => `1rem ${padding}`};
`;

const FilterContainer = styled.div`
  display: flex;
`;

// !todo: add the filter button and filter menu
const SubNav = ({ padding }) => {
  return (
    <Container padding={padding}>
      <FilterContainer>
        <Text type={"heading4"} color={theme.primary.white}>
          Sort by:
        </Text>
      </FilterContainer>
      <Button color={theme.btn.purple} hover={theme.btn.purpleHover}>
        <Plus />
        Add Feedback
      </Button>
    </Container>
  );
};

export default withTheme(SubNav);
