import styled from "styled-components";
import { useState } from "react";

// import Button from "./Button";

export default function Footer({ cards, setCards }) {
  const buttonsZap = [
    { text: "Não lembrei", color: "red", id: 0, type: "wrong" },
    { text: "Quase não lembrei", color: "orange", id: 1, type: "doubt" },
    { text: "Zap!", color: "green", id: 2, type: "correct" },
  ];

  const [resultText, setResultText] = useState(0);

  const toAnswer = function () {};

  return (
    <ContainerFooter>
      <BoxButtons>
        {buttonsZap.map((button) => (
          <Button key={button.id} color={button.color} onClick={toAnswer}>
            {button.text}
          </Button>
        ))}
      </BoxButtons>
      <ResultText>
        <span>{resultText}</span>
        <span>/{cards.length} </span>Concluídos
      </ResultText>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.footer`
  background-color: #fff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  padding-top: 9px;
  padding-bottom: 23px;
`;

const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Button = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 12px;
  text-align: center;
  flex: 0 1 65px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

const ResultText = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-top: 20px;
`;
