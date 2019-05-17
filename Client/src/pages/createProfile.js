import React from "react";

class Search extends React.Component {
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
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
