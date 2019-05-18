import React from "react";
import {DatePicker, DatePicker1, DatePickerLabel, DatePickerSelector} from "../components/DatePicker";


class Session extends React.Component {
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
              <div class="container">
                  <div class="row">
              <div class="body-content">
              <div class="module">
                  <h1 id="title2">Lets Find You an Interest</h1>
                  <form class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
                  <div class="alert alert-error"></div>
                  <h8 id="title2">Pick a subject you're interested in! </h8>
                  <div class="dropdown">
                    <button class="dropbtn">Pick one</button>
                    <div class="dropdown-content">
                      <a href="/">Painting</a>
                      <a href="/">Coding</a>
                      <a href="/">Dancing</a>
                    </div>
                  </div>
                  <label className="where">Where would you like to learn? </label>
                  <br></br>
                      <div class="radio-item">
                              <input type="radio" id="ritema" name="ritem" value="ropt1"/>
                              <label for="ritema">Home</label>
                              </div>
      
                          <div class="radio-item">
                              <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                              <label for="ritemb">Virtual</label>
                              </div>
                              <div class="radio-item">
                            <input type="radio" id="ritemc" name="ritem" value="ropt3"/>
                            <label for="ritemc">both</label>
                  </div>
                  <DatePicker><DatePicker1><DatePickerLabel><DatePickerSelector></DatePickerSelector></DatePickerLabel></DatePicker1></DatePicker>
    <br></br><br></br>
<input id="buttonbottom" type="submit" value="Register" name="register" class="btn btn-block btn-light"/>
                  </form>
              </div>
              </div>
          </div>
      </div>
      <div class="bottomNavbar">
        <a href="#home" class="active">
          Help
        </a>
        <a href="#news">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    );
  }
}

export default Session;
