import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Menu from "./pages/menu";
import About from "./pages/about";
import Dropdow from "./components/Dropdow";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdow isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
