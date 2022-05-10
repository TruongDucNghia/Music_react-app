import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Presonal from "./page/Presonal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Presonal/>}/>
      </Route>
    </Routes>
  );
}

export default App;
