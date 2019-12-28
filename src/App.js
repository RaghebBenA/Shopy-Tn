import React from "react";
import "./App.css";
import Home from "./home";
import { NavBar } from "./Nav/Nav";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ProductOnFocus from "./Product/product";
import ProductByType from "./productsByCategory";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "./Redux/reducers/reducer";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route
              exact
              path="/Product/:id"
              component={(routes) => <ProductOnFocus {...routes} />}
            />

            <Route
              exact
              path="/Products/:category/page/:page"
              component={(routes) => (
                <ProductByType key={routes.match.params.page} {...routes} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
