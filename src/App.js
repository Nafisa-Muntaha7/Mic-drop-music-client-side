import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs/AboutUs';
import Courses from './Pages/Courses/Courses/Courses';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Programs from './Pages/Programs/Programs/Programs'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/about-us">
              <AboutUs />
            </PrivateRoute>
            <PrivateRoute path="/courses">
              <Courses />
            </PrivateRoute>
            <PrivateRoute path="/blogs">
              <Blogs />
            </PrivateRoute>
            <PrivateRoute path="/programs">
              <Programs />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
