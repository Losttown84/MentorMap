import React from "react";
import API from "../utils/API";



class Contact extends React.Component {

    state = {
        fullName: '',
        email: '',
        message: ''
    };

    handleInputChange = event => {
        const { fullName, email, message } = event.target;
        this.setState({
        fullName: fullName,
        email: email,
        message: message
        })
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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a id="NavTitle" class="navbar-brand" href="/"><i className="fas fa-chalkboard-teacher" />  MentorMap</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/search">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/profile">Profile</a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button id="button5" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
            <div id="container">
            <div id="contact">
     
            <p className="about">Contact us if you have any questions or concerns </p>
    
            </div>   
     
            <div id="contact-wrap">   
                    <div id="contact-area">
                
                        <form onSubmit={this.handleFormSubmit}>
                    
                            <input value={this.state.name} onChange={this.handleInputChange} type="text" name="name" id="name" placeholder="Full Name (required)" required/>

                            <input value={this.state.email} onChange={this.handleInputChange} type="text" name="Email" id="Email" placeholder="Email (required)" required/>
                    
                            <textarea value={this.state.message} onChange={this.handleInputChange} name="Message" rows="20" cols="20" id="Message1" placeholder="Message" required></textarea>
    
                            <input disabled={(!this.state.email && !this.state.message)} type="submit" name="submit" value="Submit" className="submit-button"/>
                        </form>
                    </div>
                </div>
    
    
            </div>
    </div>
        )
    }}
  
    export default Contact;