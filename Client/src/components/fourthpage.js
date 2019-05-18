import React from "react";

class Fourth extends React.Component {
render() {
    return (
<div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
                    <a className="navbar-brand" href="/"><i className="fas fa-chalkboard-teacher"></i>  MENTORMAP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button id="searchbutton" className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <button type="button" className="btn btn-light"><i className="far fa-bell"></i></button>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                <div className="body-content">
                <div className="module">
                    <h1>Create a Profile</h1>
                    <form className="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
                    <div className="alert alert-error"></div>
                    <h8>Name: </h8>
                    <input id="info" type="text" placeholder="Full Name" name="name" required />
                    <h8>About: </h8>
                    <textarea  id="info" className="about" placeholder="Write something here!" type="text" name="textbox" rows="4" required></textarea>
                        <div className="radio-item">
                                <input type="radio" id="ritema" name="ritem" value="ropt1"/>
                                <label for="ritema">Mentor</label>
                                </div>
            
                            <div className="radio-item">
                                <input type="radio" id="ritemb" name="ritem" value="ropt2"/>
                                <label for="ritemb">Menteé</label>
                                </div>
                    <div className="propicture"><label>Select your Profile Picture:   </label><input  type="file" name="avatar" accept="image/*" required /></div>
                    <input id="buttonbottom" type="submit" value="Register" name="register" className="btn btn-block btn-light" />
                    </form>
                </div>
                </div>
            </div>
        </div>
</div>

        );
    }
    }
    
    export default Fourth;