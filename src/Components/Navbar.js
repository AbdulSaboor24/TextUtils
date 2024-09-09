import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>{props.about}</Link>
            </li>
          </ul>
          <div className="theme-toggle" onClick={props.toggleMode} style={{ cursor: 'pointer' }}>
            {props.mode === 'light' ? (
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/moon-symbol.png"
              alt="Dark Mode"
              width="30"
              height="30"
              className="img-fluid"
            />
            ) : (
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/sun--v1.png"
              alt="Light Mode"
              width="30"
              height="30"
              className="img-fluid"
            />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
}