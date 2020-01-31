import React, { useEffect } from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import NotFound from "./components/layout/NotFound";
import { getProduct } from "./actions/product";
import { getCart } from "./actions/cart";
import { PersistGate } from "redux-persist/integration/react";

// Redux

import { Provider } from "react-redux";
import { store, persistor } from "./store";

import "./App.css";
import { Layout } from "antd";

const App = () => {
  useEffect(() => {
    store.dispatch(getProduct());
    store.dispatch(getCart());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter basename="/">
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Layout>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
