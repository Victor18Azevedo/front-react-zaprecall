import styled from "styled-components";

export default function Flashcard({ question, answer, index }) {
  return (
    <ElementFlashcard>
      <Card>Pergunta {index + 1}</Card>
    </ElementFlashcard>
  );
}

const ElementFlashcard = styled.div`
  width: 300px;
  font-family: "Recursive", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  background-color: #fff;
  padding: 23px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
`;

const Card = styled.div``;
//   width: 300px;
//   font-family: "Recursive", sans-serif;
//   font-size: 16px;
//   font-weight: 700;
// `;
