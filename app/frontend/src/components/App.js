import React, {  Component } from "react";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {  Router, Route, Switch } from "react-router-dom";
import ContactEdit from '../components/Components/ContactList/ContactEdit'
import ContactSearch from '../components/Components/ContactList/Search'
import store from "./store";
//import ContactListService from "./Services/ContactListService";
import { Provider } from "react-redux";
import Dashboard from '../components/Components/ContactList/Dashboard';
// Import components
import Header from '../components/Components/Header/header'

import history from './history';
import ContactDelete from '../components/Components/ContactList/ContactDelete';
import ContactListCreate from "../components/Components/ContactList/ContactListCreate";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
        <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/search/:id' component={ContactSearch} />
            <Route exact path='/add-new-contact' component={ContactListCreate} />
            <Route exact path='/delete/:id' component={ContactDelete} />
            <Route exact path='/edit/:id' component={ContactEdit} />
           
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
