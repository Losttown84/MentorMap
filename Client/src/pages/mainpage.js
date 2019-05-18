import React from "react";
import ControlledCarousel from "../components/Carolusel";
import {Animated} from "react-animated-css";
import Logo from "../components/Images/logo.png";

class Mainpage extends React.Component {
  render() {
    return (
      <div>

        <section id="about">
  
        <Animated className="login-form" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
           <div className="row">
    <img className="logo" src={Logo}></img>
    </div>
    </Animated>
    <div className="row">
          <form className="login-form">
          <label>Email</label><br></br>
          <input type="text"  placeholder="Enter Email" id="loginEmail" />
        <br></br>
          <label>Password</label><br></br>
          <input type="password"  placeholder="Enter Password" id="loginPassword"/>
        <br></br>
         <button type="submit" id="button5">log in</button>
        <br></br>
          <button className="message" type="submit" href="/mentor" id="#button5">Not Registered? Signup</button>
          </form>
            </div>
          <div id="about-bg-diagnal" />        
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae eligendi odit sequi doloremque enim autem deserunt
                    quod facilis provident, sapiente esse est eos dolor neque
                    quam minus fugit error. Repellendus! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Vitae eligendi odit sequi
                    doloremque enim autem deserunt quod facilis provident,
                    sapiente esse est eos dolor neque quam minus fugit error.
                    Repellendus!
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br><br></br>
        <section className="footerpart">
      
      <footer>
            <a class="contact" href="./contact">got any questions?</a>
    </footer>
    </section>
            </div>
    );
  }
}

export default Mainpage;
