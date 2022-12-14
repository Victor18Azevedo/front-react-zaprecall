import styled from "styled-components";

import Flashcard from "./Flashcard";
export default function Flashcards({ cards, setCards }) {
  return (
    <ContainerFlashcards>
      {cards.map((card, index) => (
        <Flashcard
          key={card.id}
          card={card}
          index={index}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </ContainerFlashcards>
  );
}

const ContainerFlashcards = styled.main`
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  padding-top: 150px;
  padding-bottom: 142px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
