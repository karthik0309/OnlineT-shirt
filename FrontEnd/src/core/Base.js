import React from "react";
import Menu from "./Menu";
import "../styles.css";
const Base = ({
  showContainer = true,
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",

  children,
}) => (
  <div>
    <Menu />
    {showContainer && (
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
    )}
    <footer className="footer bg-dark mt-auto py-2">
      <div className="container-fluid bg-success text-white text-center py-2">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning ">Contact Us</button>
      </div>
    </footer>
  </div>
);

export default Base;
