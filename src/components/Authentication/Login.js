import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';
import google from '../../images/logos/google.png';

const Login = () => {
    return (
        <div>
            <Container>
                <div>
                    <img className="w-25 p-5" src={logo} alt="" />
                </div>
                <div className="border border-2 rounded w-50 mx-auto py-5 px-5">
                    <h5>Login with</h5>
                    <button className=" w-100 mt-3 border bg-white rounded-pill p-2"> <img src={google} alt="" /> <span className="px-5">Continue with Google</span> </button>

                    <p className="py-2">Don't have an account?<NavLink to="/register">Create an account</NavLink></p>
                </div>
            </Container>
        </div>
    );
};

export default Login;