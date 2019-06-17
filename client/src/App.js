import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ShowAllWorkouts from "./Components/ShowAllWorkouts";
import CreateNewWorkout from "./Components/CreateNewWorkout";
import OneWorkout from './Components/OneWorkout'
import EditWorkout from './Components/EditWorkout'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={ShowAllWorkouts} />
          <Route exact path="/workout/:id" component={OneWorkout} />
          <Route exact path="/workouts/create" component={CreateNewWorkout} />
          <Route exact path="/workout/:id/edit" component={EditWorkout} />
        </Switch>
      </div>
    );


    

  }
}

export default App;
