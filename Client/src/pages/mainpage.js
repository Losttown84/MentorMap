import React from "react";
import ControlledCarousel from "../components/Carolusel";
import {Animated} from "react-animated-css";


class First extends React.Component {
  render() {
    return (
      <div>
        <section id="about">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
             <h1 id="titlename">
            MENTORMAP
          </h1> 
          </Animated>
         
          
          <div id="about-bg-diagnal" />
          <div className="container">
          </div>
        
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
        <footer>
          <a class="contact" href="./contact">got any questions?</a>
        </footer>
      </div>
    );
  }
}

export default First;
