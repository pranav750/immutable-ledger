import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Ledger from './Ledger/Ledger';
import { makeStyles } from "@material-ui/core";
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
          <Ledger className={classes.root} distributed={false}/>
        </Route>
        <Route exact path="/distributedP2P">
          <Ledger className={classes.root} distributed={true}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
