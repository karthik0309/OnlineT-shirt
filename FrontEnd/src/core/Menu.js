import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import "../styles.css";
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div className="mb-2">
    <ul className="nav nav-tab bg-success fixed-top">
      <li className=" help nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className=" help nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className=" help nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className=" help nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            U. Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className=" help nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            A. Dashboard
          </Link>
        </li>
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className=" help nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="  help nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className=" help nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
