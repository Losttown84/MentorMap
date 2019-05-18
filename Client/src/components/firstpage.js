import React from "react";
// import Toggle from 'react-toggle';
import Signup from './signup';

class First extends React.Component {

  render() {
    return (
      <div>
        <section id="about">
          <h1 id="titlename" className="animated jackInTheBox delay-2s">
            MENTORMAP
          </h1>
          <div id="about-bg-diagnal" />
        <Signup></Signup>
        </section>
        <section id="sectionTwo">
          <div className="container">
            <div className="row">
              <div id="aboutbox" className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">What is MentorMap?</h1>
                  <p className="lead">
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
        </section>
        <footer>
          <a href="./contact">got any questions?</a>
        </footer>
      </div>
    );
  }
}

export default First;