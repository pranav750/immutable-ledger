import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home/Home';
import { makeStyles } from "@material-ui/core";
import DistributedP2P from "./DistributedP2P/DistributedP2P";
import Navbar from "./Navbar/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home className={classes.root}/>
        </Route>
        <Route exact path="/distributedP2P">
          <DistributedP2P className={classes.root}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
