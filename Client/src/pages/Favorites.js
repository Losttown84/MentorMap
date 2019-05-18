import React from "react";
import Cards from "../components/Cards";


class Fav extends React.Component {
    render() {
        return (

            
            <div>
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