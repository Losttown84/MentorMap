import React from "react";


class Contact extends React.Component {
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
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Profile</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link" href="/" id="tooltip"><i class="fas fa-heart"><span class="tooltiptext">Favorites</span></i></a>
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