import React from "react";
import {DatePicker, DatePicker1, DatePickerLabel, DatePickerSelector} from "./DatePicker";


class Second extends React.Component {
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

export default Second;
