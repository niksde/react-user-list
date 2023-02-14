import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Users from './Components/Users/Users';
import UserAddEdit from './Components/Users/UserAddEdit';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user/:id" component={UserAddEdit} />
          <Route path="/user" component={UserAddEdit} />
          <Route path="/" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
