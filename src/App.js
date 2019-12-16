import React from "react";
import "./App.css";
import Home from "./home";
import { NavBar } from "./Nav/Nav";
import Footer from "./footer/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
