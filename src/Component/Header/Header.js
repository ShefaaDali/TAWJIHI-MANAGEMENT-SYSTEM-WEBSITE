/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logoo.jpg";
const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-light navbar-light system-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="100" hight="44" alt="" /> Tawjihi Managment
          System Website{" "}
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                {" "}
                <button className="but-main">
                  <h6>Sign Up </h6>
                </button>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                {" "}
              </a>
            </li> */}
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                {" "}
                <button className="but-main">
                  <h6>Log In </h6>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
