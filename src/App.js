import React from "react";
import "./App.css";
import Home from "./home";
import { NavBar } from "./Nav/Nav";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ProductOnFocus from "./Product/product";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
        <Switch>
         <Route  exact path="/" component={Home} />
         <Route exact path="/Product/:id" render={(routes)=> <ProductOnFocus {...routes} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
