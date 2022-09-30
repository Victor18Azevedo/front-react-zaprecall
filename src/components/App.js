import DECK from "../mock";
import GlobalStyle from "./GlobalStyle";
import ZapRecall from "./ZapRecall";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ZapRecall decks={DECK} />
    </>
  );
}
