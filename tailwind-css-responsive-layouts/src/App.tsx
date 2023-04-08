import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopNavigationScaffold from "./pages/TopNavigationScaffold";
import SideNavigationScaffold from "./pages/SideNavigationScaffold";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/top-navigation-scaffold"
          element={<TopNavigationScaffold />}
        />
        <Route
          path="/side-navigation-scaffold"
          element={<SideNavigationScaffold />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
