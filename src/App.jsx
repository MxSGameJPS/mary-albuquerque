import { BrowserRouter } from "react-router-dom";
import DobraUm from "./DobraUm";
import EstilosGlobais from "./Style/global";

function App() {
  return (
    <BrowserRouter>
      <DobraUm />
      <EstilosGlobais />
    </BrowserRouter>
  );
}

export default App;
