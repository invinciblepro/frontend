import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../login.css';
import axios from 'axios'
import Navbar from './Navbar/Navbar';
export default class SignUp extends Component {

    signup()
    {
       const em = document.getElementById("email").value
       const un = document.getElementById("username").value
       const mn = document.getElementById("mobilenumber").value
       const ps = document.getElementById("password").value
       const cp = document.getElementById("cpassword").value
      // alert(em+" "+ps)
        axios.post('',JSON.stringify({
            email:em,
            username:un,
            mobileNumber:mn,
            password:ps,
            confirmPassword:cp
        }
        )).then(response => {
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })
    }
    render() {
        return (
            <>
            <Navbar/>
            <div class="auth-wrapper">
                <div class="auth-inner">
                <form onSubmit={()=>this.signup()}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input id="email" type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input id="username" type="text" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" id="mobilenumber" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                

                <div className="form-group">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input id="confirmpassword" type="cpassword" className="form-control" placeholder="Confirm password" />
                </div>
                <br></br>
                <button id="submitButton" type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <br></br>
                <div class="text-center" >
                <a href="/login" id="signinLink" >Already a member?Click here</a>
            </div>
            </form>
            </div>
            </div>
            </>
        );
    }
}