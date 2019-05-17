import React from "react";
import API from "../utils/API";


class Contact extends React.Component {

    state = {
        fullName: '',
        email: '',
        message: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.message) {
            API.saveContact({
                fullName: this.state.fullName,
                email: this.state.email,
                message: this.state.message
            })
        }
    }
    render() {
        return (
<div className="background">
<nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a className="navbar-brand" href="/">
                <i className="fas fa-chalkboard-teacher" />MentorMap
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        Sign Up
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">
                        Sign In
                    </a>
                    </li>
                </ul>
                </div>
            </nav>
            <div id="container">
            <div id="contact">
     
            <p className="about">Contact us if you have any questions or concerns </p>
    
            </div>   
     
            <div id="contact-wrap">   
                    <div id="contact-area">
                
                        <form method="post">
    
            
                            <input value={this.state.fullName} onChange={this.handleInputChange} type="text" name="Name" id="Name" placeholder="Full Name" required/>
                    
                            <input value={this.state.email} onChange={this.handleInputChange} type="text" name="Email" id="Email" placeholder="Email" required/>
                    
                            <textarea value={this.state.message} onChange={this.handleInputChange} name="Message" rows="20" cols="20" id="Message1" placeholder="Message" required></textarea>
    
                            <input disabled={!(this.state.email && this.state.message)} onClick={this.handleFormSubmit} type="submit" name="submit" value="Submit" className="submit-button"/>
                        </form>
                    </div>
                </div>
    
    
            </div>
    </div>
        )
    }}
  
    export default Contact;