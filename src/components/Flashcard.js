import styled from "styled-components";
import { useState } from "react";

import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as TurnIcon } from "../assets/icons/turn.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/error.svg";
import { ReactComponent as HelpIcon } from "../assets/icons/help.svg";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";

export default function Flashcard({ card, index, cards, setCards }) {
  const [cardText, setCardText] = useState(`Pergunta ${index + 1}`);

  const turnCard = function () {
    if (card.type === "hidden") {
      setCardText(card.question);
      setCards(
        cards.map((card, i) =>
          i === index ? { ...card, type: "question" } : card
        )
      );
    } else if (card.type === "question") {
      setCardText(card.answer);
      setCards(
        cards.map((card, i) =>
          i === index ? { ...card, type: "answer" } : card
        )
      );
    } else if (card.type === "answer") {
      setCardText(`Pergunta ${index + 1}`);
      setCards(
        cards.map((card, i) =>
          i === index ? { ...card, type: "result" } : card
        )
      );
    }
  };

  const chooseIcon = function () {
    const iconsDict = {
      hidden: <StyledPlayIcon />,
      question: <StyledTurnIcon />,
      correct: <StyledCheckIcon />,
      doubt: <StyledHelpIcon />,
      wrong: <StyledErrorIcon />,
    };
    if (card.type === "result") return iconsDict[card.status];
    else return iconsDict[card.type];
  };

  const setColor = function () {
    const colorDict = {
      unanswered: "#333333",
      correct: "#2FBE34",
      doubt: "#FF922E",
      wrong: "#FF3030",
    };

    return colorDict[card.status];
  };

  const biggerCardEnable = function () {
    if ((card.type === "question") | (card.type === "answer")) return true;
    else return false;
  };

  const lineThroughEnable = function () {
    if (card.type === "result") return true;
    else return false;
  };

  return (
    <ElementFlashcard
      onClick={turnCard}
      color={setColor()}
      biggerCard={biggerCardEnable()}
    >
      <CardText
        biggerCard={biggerCardEnable()}
        lineThrough={lineThroughEnable()}
      >
        {cardText}
      </CardText>
      <CardIcon biggerCard={biggerCardEnable()}>{chooseIcon()}</CardIcon>
    </ElementFlashcard>
  );
}

const ElementFlashcard = styled.div`
  width: 300px;
  height: ${(props) => (props.biggerCard ? "131px" : "24px")};
  color: ${(props) => props.color};
  font-family: "Recursive", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${(props) => (props.biggerCard ? "400 " : "700")};
  background-color: ${(props) => (props.biggerCard ? "#FFFFD4 " : "#fff")};
  padding: 23px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-center;
`;

const CardText = styled.p`
  text-decoration: ${(props) => (props.lineThrough ? "line-through" : "none")};
  height: 23px;
  align-self: ${(props) => (props.biggerCard ? "flex-start" : "center")};
`;

const CardIcon = styled.div`
  height: 23px;
  align-self: ${(props) => (props.biggerCard ? "flex-end" : "center")};
`;

const StyledPlayIcon = styled(PlayIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;

const StyledTurnIcon = styled(TurnIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;

const StyledErrorIcon = styled(ErrorIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;

const StyledHelpIcon = styled(HelpIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;
