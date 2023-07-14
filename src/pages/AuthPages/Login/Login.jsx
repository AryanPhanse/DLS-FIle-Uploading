import React from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import LoginForm from "../../../components/AuthComponents/LoginForm";

const Login = () => {
  return (
    <div>
        <style dangerouslySetInnerHTML={{__html: "body {\n        background-color: #1b1475;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        font-family: \"Open Sans\", sans-serif;\n        color: #333333;\n      }\n      \n      .box-form {\n        margin: 0 auto;\n        width: 80%;\n        background: #FFFFFF;\n        border-radius: 10px;\n        overflow: hidden;\n        display: flex;\n        flex: 1 1 100%;\n        align-items: stretch;\n        justify-content: space-between;\n        box-shadow: 0 0 20px 6px #090b6f85;\n      }\n      @media (max-width: 980px) {\n        .box-form {\n          flex-flow: wrap;\n          text-align: center;\n          align-content: center;\n          align-items: center;\n        }\n      }\n      .box-form div {\n        height: auto;\n      }\n      .box-form .left {\n        color: #FFFFFF;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-image: url(\"ttps://i.pinimg.com/736x/5d/73/ea/5d73eaabb25e3805de1f8cdea7df4a42--tumblr-backgrounds-iphone-phone-wallpapers-iphone-wallaper-tumblr.jpg\");\n        overflow: hidden;\n      }\n      .box-form .left .overlay {\n        padding: 30px;\n        width: 95%;\n        height: 100%;\n        background: red;\n        overflow: hidden;\n        box-sizing: border-box;\n      }\n      .box-form .left .overlay h1 {\n        font-size: 7vmax;\n        line-height: 1;\n        font-weight: 900;\n        margin-top: 40px;\n        margin-bottom: 40px;\n      }\n      .box-form .left .overlay span p {\n        margin-top: 30px;\n        font-weight: 900;\n      }\n      .box-form .left .overlay span a {\n        background: #3b5998;\n        color: #FFFFFF;\n        margin-top: 10px;\n        padding: 14px 50px;\n        border-radius: 100px;\n        display: inline-block;\n        box-shadow: 0 3px 6px 1px #042d4657;\n      }\n      .box-form .left .overlay span a:last-child {\n        background: #1c34aa;\n        margin-left: 30px;\n      }\n      .box-form .right {\n        padding: 40px;\n        overflow: hidden;\n      }\n      @media (max-width: 980px) {\n        .box-form .right {\n          width: 100%;\n        }\n      }\n      .box-form .right h5 {\n        font-size: 6vmax;\n        line-height: 0;\n      }\n      .box-form .right p {\n        font-size: 14px;\n        color: #B0B3B9;\n      }\n      .box-form .right .inputs {\n        overflow: hidden;\n      }\n      .box-form .right input {\n        width: 100%;\n        padding: 10px;\n        margin-top: 25px;\n        font-size: 16px;\n        border: none;\n        outline: none;\n        border-bottom: 2px solid #1c34aa;\n      }\n      .box-form .right .remember-me--forget-password {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      .box-form .right .remember-me--forget-password input {\n        margin: 0;\n        margin-right: 7px;\n        width: auto;\n      }\n      .box-form .right button {\n        float: right;\n        color: #1c34aa;\n        font-size: 16px;\n        padding: 12px 35px;\n        border-radius: 50px;\n        display: inline-block;\n        border: 0;\n        outline: 0;\n        background-color: 1c34aa;\n      }\n      \n      label {\n        display: block;\n        position: relative;\n        margin-left: 30px;\n      }\n      \n      label::before {\n        content: ' \\f00c';\n        position: absolute;\n        font-family: FontAwesome;\n        background: transparent;\n        border: 3px solid #1c34aa;\n        border-radius: 4px;\n        color: transparent;\n        left: -30px;\n        transition: all 0.2s linear;\n      }\n      \n      label:hover::before {\n        font-family: FontAwesome;\n        content: ' \\f00c';\n        color: #fff;\n        cursor: pointer;\n        background: #1c34aa;\n      }\n      \n      label:hover::before .text-checkbox {\n        background: #70F570;\n      }\n      \n      label span.text-checkbox {\n        display: inline-block;\n        height: auto;\n        position: relative;\n        cursor: pointer;\n        transition: all 0.2s linear;\n      }\n      \n      label input[type=\"checkbox\"] {\n        display: none;\n      }" }} />
        <meta charSet="UTF-8" />
        <title class="font-weight-bold">Login Page </title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" /><link rel="stylesheet" href="./style.css" />
        {/* partial:index.partial.html */}
        <div className="box-form">
          <div className="left">
            <div className="overlay">
              <h1>Digital Learning Solution</h1>
              <p>Enabling digital equity and strengthening technology integration in urban vernacular medium schools</p>
              <span>
                <a href="#"><i className="fa fa-google" aria-hidden="true" /> Login with Google</a>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
              </span>
            </div>
          </div>
          <div className="right">
            <br />
            <br />
            <br />
            <br />
            <h5>Login</h5>
            <br />
            <br />
            <br />
            <br />
            

            <p>Don't have an account? <a href="/register">Creat Your Account</a> it takes less than a minute</p>
            <br />
            <div className="col-md-12 mx-auto mt-7">
          <LoginForm />
        
        </div>
            
          </div>
        </div>
        {/* partial */}
      </div>
    
  );
};

export default Login;

/*<div className="container-fluid">
      
      <h1 className="display-1 my-5 text-center">Login here</h1>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <LoginForm />
          <Link to="/register">Not a member? Register</Link>
        </div>
      </div>
    </div>*/