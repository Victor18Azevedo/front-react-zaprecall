import styled from "styled-components";
import React, { useState } from "react";
import GlobalStyle from "../GlobalStyle";

import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";

export default function App() {
  return (
    <Container>
      <Header />
      <Flashcards />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: 375px;
  max-height: 667px;
  background: #fb6b6b;
  margin: 0 auto;
`;
