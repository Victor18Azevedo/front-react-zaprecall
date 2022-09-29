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

const ContainerFlashcards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  margin-bottom: 32px;
`;
