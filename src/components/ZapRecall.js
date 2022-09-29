import styled from "styled-components";

import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import { useState } from "react";

const CARDS_TO_SHOW = 4;

export default function ZapRecall({ decks }) {
  const deck = [...decks]
    .sort(() => Math.random() - 0.5)
    .slice(0, CARDS_TO_SHOW);

  const [cards, setCards] = useState(
    deck.map((card) => ({
      ...card,
      status: "unanswered",
      type: "hidden",
    }))
  );

  return (
    <Container>
      <Header />
      <Flashcards cards={cards} setCards={setCards} />
      <Footer cards={cards} setCards={setCards} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 375px;
  max-height: 667px;
  background-color: #fb6b6b;
  margin: 0 auto;
`;
