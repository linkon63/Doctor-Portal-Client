import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor/AddDoctor';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addDoctor">
              <AddDoctor></AddDoctor>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/appointment">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
      </Router>
  </UserContext.Provider> 
  );
}

export default App;
