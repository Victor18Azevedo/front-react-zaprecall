import styled from "styled-components";

import COLORS from "../colors";

export default function Footer({ cards, setCards }) {
  const buttonsZap = [
    { text: "Não lembrei", type: "forgot" },
    { text: "Quase não lembrei", type: "almostForgot" },
    { text: "Zap!", type: "zap" },
  ];

  const cardsAnswered = cards.filter((card) => card.type === "result");
  const clickEnable = cards.some((el) => el.type === "answer");

  const toAnswer = function (buttonType) {
    if (clickEnable) {
      const CardToAnswerIndex = cards.findIndex((el) => el.type === "answer");
      setCards(
        cards.map((card, i) =>
          i === CardToAnswerIndex
            ? { ...card, type: "result", status: buttonType }
            : card
        )
      );
    }
  };

  const tagTestButton = function (buttonType) {
    const tagButtonsDict = {
      forgot: "forgot-btn",
      almostForgot: "almost-forgot-btn",
      zap: "zap-btn",
    };

    return tagButtonsDict[buttonType];
  };

  return (
    <ContainerFooter>
      <BoxButtons>
        {buttonsZap.map((button) => (
          <Button
            key={button.type}
            color={COLORS[button.type]}
            onClick={() => toAnswer(button.type)}
            cursorPointer={clickEnable}
            data-identifier={tagTestButton(button.type)}
          >
            {button.text}
          </Button>
        ))}
      </BoxButtons>
      <ResultText data-identifier="flashcard-counter">
        <span>{cardsAnswered.length}</span>
        <span>/{cards.length} </span>CONCLUÍDOS
      </ResultText>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.footer`
  max-width: 450px;
  height: 110px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: #fff;
  font-family: "Recursive", sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  width: 85px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 10px; */
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: ${(props) => (props.cursorPointer ? "pointer" : "normal")};
    filter: ${(props) => (props.cursorPointer ? "brightness(0.7)" : "")};
    transition: 0.5s;
  }
`;

const ResultText = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 22px;
`;
