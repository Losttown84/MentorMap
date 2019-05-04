
import React from "react";

function fourthPage() {
return (
    <div>
    <nav class="navbar navbar-expand-xl navbar-light bg-light">
                <a class="navbar-brand" href="#" style="color:#57737A"><i class="fas fa-chalkboard-teacher" style="color:#57737A"></i>  MENTORMAP</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button id="searchbutton" class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button type="button" class="btn btn-light"><i class="far fa-bell"></i></button>
                </div>
            </nav>
            <div class="container">
                <div class="row">
            <div class="body-content">
            <div class="module">
                <h1>Create a Profile</h1>
                <form class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
                <div class="alert alert-error"></div>
                <h8>Name: </h8>
                <input id="info" type="text" placeholder="Full Name" name="name" required />
                <h8>About: </h8>
                <textarea  id="info" class="about" placeholder="Write something here!" type="text" name="textbox" rows="4" required></textarea>
                    <div class="radio-item">
                            <input type="radio" id="ritema" name="ritem" value="ropt1"/>
                            <label for="ritema">Mentor</label>
                            </div>
            
                        <div class="radio-item">
                            <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                            <label for="ritemb">Menteé</label>
                            </div>
                <div class="propicture"><label>Select your Profile Picture:   </label><input  type="file" name="avatar" accept="image/*" required /></div>
                <input id="buttonbottom" type="submit" value="Register" name="register" class="btn btn-block btn-light" />
                </form>
            </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default fourthPage;
