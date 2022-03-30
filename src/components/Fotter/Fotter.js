import React from "react";
import "./Fotter.css";
import { BsFacebook, BsPinterest, BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Fotter = () => {
  return (
    <footer className="bg-light">
      <div className="container d-md-flex flex-wrap justify-content-between align-items-center text-center">
        <div className="social-links">
          <h5>Follw Us</h5>
          <div className="icons">
            <BsFacebook className="text-primary mx-2 "></BsFacebook>
            <AiFillTwitterCircle className="text-info mx-2 "></AiFillTwitterCircle>
            <BsPinterest className="text-danger mx-2 "></BsPinterest>
            <BsWhatsapp className="text-info mx-2 "></BsWhatsapp>
            <FaLinkedinIn className="text-info mx-2 "></FaLinkedinIn>
          </div>
        </div>
        <div className="phone my-3 m-md-0">
          <h5>Call Us Today!</h5>
          <h4 className="text-info">+012345-67900</h4>
        </div>
        <img
          className="img-fluid w-25"
          src="https://kachabazar-store.vercel.app/_next/image?url=%2Fpayment-method%2Fpayment-logo.png&w=384&q=75"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Fotter;
