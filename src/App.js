import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
