import React from "react";
import { Spinner } from "react-bootstrap";

const Spiners = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
      style={{ height: "100vh", background: "red" }}
    >
      <Spinner animation="grow" />
    </div>
  );
};

export default Spiners;
