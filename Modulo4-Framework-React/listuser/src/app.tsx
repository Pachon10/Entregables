import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { SearchProvider } from "./searchContext"

export const App = () => {
  return (
    <SearchProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/list">
              <ListPage />
            </Route>
            <Route path="/detail/:id">
              <DetailPage />
            </Route>
          </Switch>
        </Router>
      </SearchProvider>
  );
};
