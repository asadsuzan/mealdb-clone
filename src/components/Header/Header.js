import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-info">
      <div className="container">
        <nav
          className="d-md-flex text-center  justify-content-between  align-items-center"
          style={{ height: "80px" }}
        >
          <div className="brand">
            <img
              className="logo img-fluid"
              src="https://www.themealdb.com/images/logo-small.png"
              alt="logo"
            />
          </div>
          <div className="nav-links">
            <Link className="text-white px-2 text-bold text-uppercase" to={"/"}>
              Home
            </Link>
            <Link
              className="text-white px-2 text-bold text-uppercase"
              to={"/catagories"}
            >
              Catagories
            </Link>
            <Link
              className="text-white px-2 text-bold text-uppercase"
              to={"/about"}
            >
              About Us
            </Link>
            <Link
              className="text-white px-2 text-bold text-uppercase"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
