import React from "react";

function firstPage() {
return (

    <div>
        <section id="about">
                    <h1 id="titlename" className="animated jackInTheBox delay-2s">MENTORMAP</h1>
                <div id="about-bg-diagnal"></div>     
        <div className="container">
         
        <div className="logInbox">
            
                <form className="login-form">
                <p>Email</p>
                <input type="text" name="" placeholder="Enter Email" id="loginEmail"></input>
        
                <p>Password</p>
                <input type="password" name="" placeholder="Enter Password" id="loginPassword"></input>
        
                <input id="loginBtn" value="Login" type="submit"><a href="/" ></a></input>
        
                <p className="message">Not Registered?<a className="link" href="/"> Signup</a></p>
                </form>
                <form className="register-form">
                <input type="text" placeholder="Name" id="signupName" />
                <input type="text" placeholder="Enter Email" id="signupEmail" />
                <input type="text" placeholder="New Password" id="signupPassword" />
                <input className="SignBtn" value="Sign-Up" id="signupBtn" type="submit"><a href="/"></a></input>
        
                <p className="message">Already have an account?<a className="link" href="/"> Login</a></p>
                </form>
            </div>
        </div>
        </section>
        <section id="sectionTwo">

            <div className="container">
                <div className="row">
                        <div id="aboutbox" className="jumbotron jumbotron-fluid">
                                <div className="container">
                                   
                                    <h1 className="display-4">What is MentorMap?</h1>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Vitae eligendi odit sequi doloremque enim autem deserunt quod facilis 
                                        provident, sapiente esse est eos dolor neque quam minus fugit error.
                                        Repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Vitae eligendi odit sequi doloremque enim autem deserunt quod facilis 
                                        provident, sapiente esse est eos dolor neque quam minus fugit error.
                                        Repellendus!</p>
                                </div>
                                </div>
                </div>
            </div>
        </section>
        <footer>
            <a href="./contact">got any questions?</a>
        </footer>
          
    </div>
    
);
}

export default firstPage;
