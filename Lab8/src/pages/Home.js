import React from "react";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

function Home(props) {
    return (
        <React.Fragment>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>WeatherDeliver</h1>
                            <p>Welcome to our weather delivering service! Here you can log into very secret web-app and take a quick look at the future.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Home;
