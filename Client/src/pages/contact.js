import React from "react";


class Contact extends React.Component {
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
                <form className="form-inline">
                    <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Postal Code"
                    aria-label="Search"
                    />
                    <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    >
                    Search
                    </button>
                </form>
                </div>
            </nav>
            <div id="container">
            <div id="contact">
     
            <p class="about">Contact us if you have any questions or concerns </p>
    
            </div>   
     
            <div id="contact-wrap">   
                    <div id="contact-area">
                
                        <form method="post">
    
            
                            <input type="text" name="Name" id="Name" placeholder="Full Name" required/>
                    
                            <input type="text" name="Email" id="Email" placeholder="Email" required/>
                    
                            <textarea name="Message" rows="20" cols="20" id="Message1" placeholder="Message" required></textarea>
    
                            <input type="submit" name="submit" value="Submit" class="submit-button"/>
                        </form>
                    </div>
                </div>
    
    
            </div>
    </div>
        )
    }}
  
    export default Contact;