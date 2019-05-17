import React from "react";

class Search extends React.Component {
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
        <div class="body-content">
          <div class="module">
            <h1 class="TitlePage3">Create an Profile</h1>
            <form class="form" action="" method="post" enctype="multipart/form-data" autocomplete="off">
              <div class="alert alert-error"></div>
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" name="username" required />
              <label>Tell us About yourself! (Intrests.. etc)</label>
              <textarea name="message" placeholder="About you!" rows="4" cols="30" required/>
              <label><i class="fab fa-linkedin"></i> Account Username</label>
              <input type="text" placeholder="Username"></input>
              <div class="avatar"><label>Select your Profile Picture: </label><input type="file" name="avatar" accept="image/*" required /></div>
              <br></br>

              <input type="submit" value="Register" name="register" id="button5" class="btn btn-block btn-light" />
            </form>
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

export default Search;
