import React from "react";
import Cards from "../components/Cards";


class Fav extends React.Component {
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
                </div>
            </nav>
        <div className="col-md-4">
        <div className="container">
        <div className="row">
  <div className="cardfav">
  <h1 className="favmen">FAVORITE MENTORS</h1>
<Cards></Cards>
</div>
    </div>
</div>
<div>
        </div>
        </div>
        </div>
        )
    }}

export default Fav; 