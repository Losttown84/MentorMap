import React from "react";

class Third extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <i className="fas fa-chalkboard-teacher" />MentorMap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sign In
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Postal Code"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div className="row">
          <div className="col-lg-12">
            <h1>Find a Mentor</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <section id="left">
                <h4>Services</h4>
                <form action="/action_page.php">
                  <h6>
                    {" "}
                    Zip Code<input type="text" name="fname" />
                  </h6>
                  <h6>
                    Skill <input type="text" name="lname" />
                  </h6>
                  <button className="btn btn-secondary" type="submit">
                    Submit
                  </button>
                </form>
              </section>
            </div>

            <div className="col-md-4">
              <div className="card">
              
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">field</p>
                  <a href="/" className="btn btn-primary">
                    Profile{" "}
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default Third;
