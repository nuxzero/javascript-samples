import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

const HatesPage = () => <div>Hats page</div>;

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/hats" element={<HatesPage />} />
    </Routes>
  );
}

export default App;
