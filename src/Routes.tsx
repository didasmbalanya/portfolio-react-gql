import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Navigation } from "./components/Navigation";
import { Skills } from "./pages/Skills";
import { Education } from "./pages/Education";
import { Experience } from "./pages/Experience";
import { Blogs } from "./pages/Blogs";
import { Projects } from "./pages/Projects";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navigation></Navigation>
          <br />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
