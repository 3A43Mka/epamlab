import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/logo.jpg";
import { CustomCard, CustomLogo, CustomForm, CustomInput, CustomButton, CustomError } from "../components/AuthForm";
import { useAuth } from "../context/auth";
import users from '../users';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = props.location.state.referer || '/';

    function postLogin() {
        let valid = true;
        setErrorMsg("Incorrect lofin data")
        if (!(userName && password)) {
            valid = false;
            setErrorMsg("Empty fields are not allowed!")
        } else if (userName.length < 4) {
            setErrorMsg("Username is too short!")
            valid = false;
        } else if (password.length < 4) {
            setErrorMsg("Password is too short!")
            valid = false;
        } else {
            let found = false;
            for (let i = 0; i < users.length; i++) {
                if ((users[i].username === userName) && (users[i].password === password)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                valid = false;
            }
        }
        if (valid) {
            setAuthTokens(Date.now().toString());
            setLoggedIn(true);
        } else {
            console.log("Wrong login or pass");
            setIsError(true);
        }
    }
    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }
    return (
        <React.Fragment>

            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Logging In</h1>
                            <p>Logging in is an crucial step of using this web-app. By logging in, you not only give us all info about yourself (including card number) but also gain access to the most relevant weather delivery system.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <CustomCard>
                <CustomLogo src={logoImg} />
                <CustomForm>
                    <CustomInput
                        type="username"
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                        placeholder="username"
                    />
                    <CustomInput
                        type="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="password"
                    />
                    <CustomButton onClick={postLogin}>Sign In</CustomButton>
                </CustomForm>
                {isError && <CustomError>{ErrorMsg}</CustomError>}
            </CustomCard>
        </React.Fragment>
    );
}

export default Login;
