import React from "react";

function secondPage() {
return (
<div>
<nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a id="navBrand" className="navbar-brand" href="/" ><i id="icon" className="fas fa-chalkboard-teacher" ></i>MentorMap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Sign Up</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Sign In</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Postal Code" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>

<div class="container">
    <div class="row">
<div class="body-content">
<div class="module">
    <h1>Lets find your Interests!   </h1>
    <form class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
    <div class="alert alert-error"></div>
    <h8>I am looking to learn:   </h8>
    
    <div class="dropdown">
            <button class="dropbtn">List of Interest</button>
            <div class="dropdown-content">
                <a href="/">Painting</a>
                <a href="/">Coding</a>
                <a href="/">Something else here</a>
            </div>
            </div>

    <h8>Where would you like to meet? </h8>
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
                <label for="ritemc">Both</label>
                </div>
   
    <input id="buttonbottom" type="submit" value="Register" name="register" class="btn btn-block btn-light" />
     </form>              
</div>  
</div>
</div>

<div class="bottomNavbar">
        <a href="#home" class="active">Help</a>
        <a href="#news">About</a>
        <a href="#contact">Contact</a>
</div>
  </div>
  </div>
    

);
}

export default secondPage;
