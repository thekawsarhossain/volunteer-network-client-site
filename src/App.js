import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Dashboard from './components/Dashboard/Dashboard';
import VolunteerRegisterList from './components/Dashboard/VolunteerRegisterList/VolunteerRegisterList';
import AddEvent from './components/Dashboard/AddEvent/AddEvent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register-list" component={VolunteerRegisterList} />
          <Route path="/add-event" component={AddEvent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
