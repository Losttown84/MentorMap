import React from "react";
import ControlledCarousel from "../components/Carolusel";
import {Animated} from "react-animated-css";
import Logo from "../components/Images/logo.png";

class Mainpage extends React.Component {
  
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <div>

        <section id="about">
 
        <Animated className="login-form" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}> 
       <img className="logo" src={Logo}></img>
    </Animated>
          <form id="login-form" className="login-form">
          <label>Email</label><br></br>
          <input type="text"  placeholder="Enter Email" id="loginEmail" />
        <br></br>
          <label>Password</label><br></br>
          <input type="password"  placeholder="Enter Password" id="loginPassword"/>
        <br></br>
         <button type="submit" id="button5">log in</button>
        <br></br>
          <button className="message" type="submit" href="/mentor" id="button5">Not Registered? Signup</button>
          </form>
         <div id="about-bg-diagnal"/>
        </section>
        <section id="sectionTwo">
        <br></br><br></br><br></br><br></br><br></br>
          <div className="container">
            <div className="row">
              <div id="aboutbox" className="jumbotron jumbotron-fluid">
                <div className="container">
                <ControlledCarousel></ControlledCarousel>
                </div>
                <div id="diplay-4" className="row">
                  <h1 className="display-4">What is MentorMap?</h1>
                  <div className="lead">
                  <p className="mainabout">
                  MentorMap is something that can be utilized by people of differing age groups, whether it is someone struggling with high school algebra or grandma wanting to do a complicated cross stitch for needlework. A mentor is someone who you can rely on with their professional expertise, who can make achieving your goals easier. Our app will connect you with an expert in your trade, locally, in-person or virtually. Additionally, with your mentor, it’ll be a great way to network with a local professional to either find a new career or friend.
<br></br><br></br>
<i>The only mistake you can make is not asking for help - Sandeep Jauhar</i>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br><br></br>
        <section className="footerpart">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <footer>
            <a class="contact" href="./contact">got any questions?</a>
    </footer>
    </section>
            </div>
    );
  }
}

export default Mainpage;
