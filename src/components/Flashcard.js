import styled from "styled-components";

import { ReactComponent as PlayIcon } from "../assets/icons/play.svg";
import { ReactComponent as TurnIcon } from "../assets/icons/turn.svg";
import { ReactComponent as ForgotIcon } from "../assets/icons/error.svg";
import { ReactComponent as AlmostForgotIcon } from "../assets/icons/help.svg";
import { ReactComponent as ZapIcon } from "../assets/icons/check.svg";
import COLORS from "../colors";

export default function Flashcard({ card, index, cards, setCards }) {
  const turnCard = function () {
    const turnCardHiddenEnable = !cards.some(
      (el) => (el.type === "question") | (el.type === "answer")
    );
    if ((card.type === "hidden") & turnCardHiddenEnable) {
      setCards(
        cards.map((card, i) =>
          i === index ? { ...card, type: "question" } : card
        )
      );
    } else if (card.type === "question") {
      setCards(
        cards.map((card, i) =>
          i === index ? { ...card, type: "answer" } : card
        )
      );
    }
  };

  const setCardText = function () {
    const textDict = {
      hidden: `Pergunta ${index + 1}`,
      question: card.question,
      answer: card.answer,
      result: `Pergunta ${index + 1}`,
    };

    return textDict[card.type];
  };

  const setCardIcon = function () {
    const iconsDict = {
      hidden: <StyledPlayIcon />,
      question: <StyledTurnIcon />,
      zap: <StyledZapIcon />,
      almostForgot: <StyledAlmostForgotIcon />,
      forgot: <StyledForgotIcon />,
    };

    if (card.type === "result") return iconsDict[card.status];
    else return iconsDict[card.type];
  };

  const setButtonColor = function () {
    return COLORS[card.status];
  };

  const biggerCardEnable = function () {
    if ((card.type === "question") | (card.type === "answer")) return true;
    else return false;
  };

  const styleResultEnable = function () {
    if (card.type === "result") return true;
    else return false;
  };

  const tagTestIcon = function () {
    const tagIconsDict = {
      hidden: "flashcard-show-btn",
      question: "flashcard-turn-btn",
      result: "flashcard-status",
    };

    return tagIconsDict[card.type];
  };

  const tagTestText = function () {
    const tagTextDict = {
      hidden: "flashcard-index-item",
      question: "flashcard-question ",
      answer: "flashcard-answer",
    };

    return tagTextDict[card.type];
  };

  return (
    <ElementFlashcard
      color={setButtonColor()}
      biggerCard={biggerCardEnable()}
      data-identifier="flashcard"
    >
      <CardText
        biggerCard={biggerCardEnable()}
        styleResult={styleResultEnable()}
        data-identifier={tagTestText()}
      >
        {setCardText()}
      </CardText>
      <CardIcon
        onClick={turnCard}
        biggerCard={biggerCardEnable()}
        styleResult={styleResultEnable()}
        data-identifier={tagTestIcon()}
      >
        {setCardIcon()}
      </CardIcon>
    </ElementFlashcard>
  );
}

const ElementFlashcard = styled.div`
  width: 300px;
  min-height: ${(props) => (props.biggerCard ? "130px" : "50px")};
  max-height: fit-content;
  color: ${(props) => props.color};
  font-family: "Recursive", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${(props) => (props.biggerCard ? "400 " : "700")};
  background-color: ${(props) => (props.biggerCard ? "#FFFFD4 " : "#fff")};
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-center;
  transition: 0.5s;
  transition-timing-function: ease;
  flex: 1 0;
`;

const CardText = styled.p`
  text-decoration: ${(props) => (props.styleResult ? "line-through" : "none")};
  height: 23px;
  align-self: ${(props) => (props.biggerCard ? "flex-start" : "center")};
`;

const CardIcon = styled.div`
  height: 23px;
  align-self: ${(props) => (props.biggerCard ? "flex-end" : "center")};
  &:hover {
    cursor: ${(props) => (props.styleResult ? "normal" : "pointer")};
  }
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

const StyledForgotIcon = styled(ForgotIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;

const StyledAlmostForgotIcon = styled(AlmostForgotIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;

const StyledZapIcon = styled(ZapIcon)`
  height: 23px;
  path {
    fill: currentColor;
    stroke-width: 48;
  }
`;
