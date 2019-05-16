import React from "react";


class Sixth extends React.Component {
render() {
    return (
<div>

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
            <div class="input-group">
                <input type="text" class="form-control input-search" name="q" id="search" placeholder="Search"></input>
                <span class="input-group-addon group-icon"><span class="glyphicon glyphicon-user"></span>
            </div>
            <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            >
            Search
            </button>
        </form>
        </div>
    </nav>
    <div className="container">
    <div className="row">
    <div id="profilebox" className="jumbotron jumbotron-fluid">
    <div class="card2">
        <img class="card-img-top" src="" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">Name</h5>
            <a href="/" class="card-link">LinkedIn</a>
            <br></br>
            <button id="button5" type="submit" className="btn btn-light">Schedule a Session</button>
        
        </div>
    </div>
<p className="paraProfile">This is where the about me goes!</p>
</div>
    </div>
    </div>
    
</div>
    )
}}

export default Sixth;