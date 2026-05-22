import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DraftProjections from "./pages/DraftProjections/DraftProjections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/draft-projections" element={<DraftProjections />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;