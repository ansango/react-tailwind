import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import Nav from "./components/nav";

const title = "title-app";
const routerViews = Routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Nav title={title} />
          <Switch>{routerViews}</Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
