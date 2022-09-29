import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt="Logo Zap Recall"></img>
      <h1>ZapRecall</h1>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  background-color: #fb6b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 42px 0;

  img {
    height: 60px;
  }

  h1 {
    color: #fff;
    font-family: "Righteous", cursive;
    font-size: 36px;
    font-weight: 400;
  }
`;
