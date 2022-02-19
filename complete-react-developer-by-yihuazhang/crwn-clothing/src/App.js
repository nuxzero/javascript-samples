import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopePage from "./pages/shop/shop.component";

import "./App.css";
import Header from "./components/header/header.component";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopePage />} />
      </Routes>
    </>
  );
}

export default App;
