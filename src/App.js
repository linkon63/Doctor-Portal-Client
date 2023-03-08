import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import './App.css';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addDoctor">
            <AddDoctor />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
