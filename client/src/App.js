import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Locations from "./pages/Locations";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import { Container } from 'reactstrap';
import Navbar from "./components/Navbar"
const App = () => (
  <Router>
    <Container className="container">
<Navbar />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/locations/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Router>
);

export default App;
// END 


