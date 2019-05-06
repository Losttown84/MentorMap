import React from "react";

class Second extends React.Component {
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

        <div className="col-md-6 offset-md-3">
          <div className="container">
            <div className="row">
              <form className="needs-validation" novalidate>
                <div className="form-row">
                  <div className="col-md-4 mb-3">
                    <label for="validationCustom01">
                      I am looking to learn
                    </label>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        list of interests
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="/">
                          Painting
                        </a>
                        <a className="dropdown-item" href="/">
                          Coding
                        </a>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label for="validationCustom03">
                      Where would you like to meet?{" "}
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" for="gridCheck1">
                        Home
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" for="gridCheck1">
                        Virtual
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" for="gridCheck1">
                        Both
                      </label>
                    </div>
                    <div className="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationCustom04">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      placeholder="Date"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid date.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="validationCustom05">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      placeholder="Zip"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                </div>

                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="bottomNavbar">
          <a href="#home" class="active">
            Help
          </a>
          <a href="#news">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Second;
