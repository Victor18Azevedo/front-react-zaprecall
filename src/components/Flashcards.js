import styled from "styled-components";

import Flashcard from "./Flashcard";

const deck = [
  {
    id: 0,
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
  },
  {
    id: 1,
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    id: 2,
    question: "Componentes devem iniciar com __ ",
    answer: "letra maiúscula",
  },
  {
    id: 3,
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões",
  },
  {
    id: 4,
    question: "O ReactDOM nos ajuda __ ",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    id: 5,
    question: "Usamos o npm para __ ",
    answer: "6. gerenciar os pacotes necessários e suas dependências",
  },
  {
    id: 6,
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes ",
  },
  {
    id: 7,
    question: "Usamos estado (state) para __ ",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

const deckSorted = deck.slice(0, 4);

export default function Flashcards() {
  return (
    <ContainerFlashcards>
      {deckSorted.map((card, index) => (
        <Flashcard
          key={card.id}
          question={card.question}
          answer={card.answer}
          index={index}
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
