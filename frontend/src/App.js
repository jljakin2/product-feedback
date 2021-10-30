import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";

import ScrollToTop from "./components/utilities/ScrollToTop";
import Nav from "./components/Nav";
import SubNav from "./components/SubNav";
import FeedbackList from "./components/FeedbackList";

const padding = "2rem";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Router>
        <ScrollToTop/>
      </Router> */}
      <Nav padding={padding} />
      <SubNav padding={padding} />
      <FeedbackList padding={padding} />
    </ThemeProvider>
  );
};

export default App;
