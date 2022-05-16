import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Charts from "./page/Charts";
import Explore from "./page/Explore";
import Following from "./page/Following";
import Presonal from "./page/Presonal";
import Radio from "./page/Radio";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Presonal />} />
        <Route path="explore" element={<Explore />} />
        <Route path="charts" element={<Charts />} />
        <Route path="radio" element={<Radio />} />
        <Route path="following" element={<Following />} />
      </Route>
    </Routes>
  );
}

export default App;
