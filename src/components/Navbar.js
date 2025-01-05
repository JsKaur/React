// write rfc to import React and enter->

import React from "react";

// write impt to import ProtoTypes and enter->
import PropTypes from "prop-types";

// props are properties and accessed like variables.
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.About}
              </a>
              {/* using props */}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// PropTypes help to prevent the errors by providing type check on the variables .here, we ensure that title and about shouls be string. if in app.js, we give number or object, we will get error.
Navbar.propTypes = { title: PropTypes.string.isRequired, About: PropTypes.string }

// we can set default values as well and no need to give title and about text in app.js.
Navbar.defaultProps = {
    title: "Textutils",
    About: "About text here",
  };
