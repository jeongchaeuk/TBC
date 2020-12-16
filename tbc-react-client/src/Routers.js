import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./member/Login";
// import Join from "./member/Join";
// import Adduser from "./member/Adduser";
import UserSetting from "./member/UserSetting";
import Detail from "./Detail/Detail";
import EditProject from "./components/EditProject";
import Discover from "./Discover/Discover";
import Card from "./Main/Cards";

class Routers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Login" component={Login} exact />
          {/* <Route path="/join" component={Join} exact /> */}
          {/* <Route path="/Adduser" component={Adduser} exact /> */}
          <Route path="/setting" component={UserSetting} />
          <Route path="/Detail" component={Detail} />
          <Route path="/discover" component={Discover} />
          <Route path="/editProject" component={EditProject} />
          <Route path="/card" component={Card} />
        </Switch>
      </Router>
    );
  }
}
export default Routers;
