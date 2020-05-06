import React, { useState } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.css';
import Logotype from "./img/Logotype.png";

// import { Button } from "./components/AuthForm";
import { AuthContext } from "./context/auth";
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  function logOut() {
    setAuthTokens();
    localStorage.clear("tokens");
  }
  return (
    <React.Fragment>

      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <div>
            <Navbar expand="md">
              <div className="container">
                <NavbarBrand className="mr-auto" href="/"><img src={Logotype} height="30" width="41" alt='WeatherDeliver' /></NavbarBrand>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to='/'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to='/dashboard'><span className="fa fa-info fa-lg"></span> Dashboard </NavLink>
                  </NavItem>

                  {authTokens &&
                  <NavItem>
                    <NavLink className="nav-link" onClick={logOut} to='#'><span className="fa fa-info fa-lg"></span> Logout </NavLink>
                  </NavItem>
                  }


                  {/* {authTokens &&
                    <NavItem>
                      <Button class="btn btn-default" onClick={logOut}>Log out</Button>
                    </NavItem>
                  } */}
                </Nav>

              </div>
            </Navbar>




            {/* <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/dashboard'><span className="fa fa-info fa-lg"></span> Dashboard</NavLink>
                            </NavItem>
                            
                            </Nav>
                            
                    </div>
                </Navbar> */}

            {/* <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul> */}



            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
