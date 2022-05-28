import "./App.css";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreem from "./Screen/HomeScree";
import DashboardScreen from "./Screen/DashboardScreen";
import PostsScreen from "./Screen/PostsScreen";
import LinksScreen from "./Screen/LinksScreen";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeScreem />
        </Route>
        <Route path="/Dashboard">
          <DashboardScreen />
        </Route>
        <Route path="/Posts">
          <PostsScreen/>
        </Route>
        <Route path="/Links">
          <LinksScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
