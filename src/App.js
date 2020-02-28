import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "../src/containers/BurgerBuilder/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  // state = {
  //   show: true
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" component={BurgerBuilder} />
            <Route path="/checkout" component={CheckOut} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
