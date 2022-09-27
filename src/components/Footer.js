import styled from "styled-components";

const TOTAL = 4;

const buttonsZap = [
  { text: "Não lembrei", color: "red", id: 0 },
  { text: "Quase não lembrei", color: "orange", id: 1 },
  { text: "Zap!", color: "green", id: 2 },
];

export default function Footer() {
  return (
    <ContainerFooter>
      <BoxButtons>
        {buttonsZap.map((button) => (
          <Button key={button.id} color={button.color}>
            {button.text}
          </Button>
        ))}
      </BoxButtons>
      <ResultText>
        <span>0</span>
        <span>/{TOTAL} </span>Concluídos
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
