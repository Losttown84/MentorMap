import React from "react";
import axios from "axios";
import Example from "./signin";

class First extends React.Component {
  render() {

    const dummylogin = {
      username: "testinfinity@infinity.com",
      password: "1234abcddd"
    }
    axios.post("http://localhost:3001/signup", dummylogin).then(function(data) {
      console.log("this is what we got back", data);
    })
    
    return (
      <div>
        <section id="about">
          <h1 id="titlename" className="animated jackInTheBox delay-2s">
            MENTORMAP
          </h1>
          <div id="about-bg-diagnal" />
          <div className="container"/>
          <div className="signInStyle">
          <Example></Example>
          </div>
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
