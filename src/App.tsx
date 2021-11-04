import React, {Suspense} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Loading from "./pages/Loading";
import Expertise from "./pages/Expertise";
import RecentWorks from "./pages/RecentWorks";
import LetsTalk from "./pages/LetsTalk";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" children={<Home />} exact />
            <Route path="/expertise" children={<Expertise />} exact />
            <Route path="/recentworks" children={<RecentWorks />} exact />
            <Route path="/letstalk" children={<LetsTalk />} exact />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default App;
