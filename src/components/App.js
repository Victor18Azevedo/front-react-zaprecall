import DECK from "../mock";
import ZapRecall from "./ZapRecall";

export default function App() {
  return (
    <>
      <ZapRecall decks={DECK} />
    </>
  );
}
