import React from "react";
import { Card } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <section className="contact-section my-5">
      <h1 className="text-center py-5 my-5">Contact Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <div className="icon">
                    {" "}
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                  <h4>Email Us</h4>
                </Card.Title>
                <hr />
                <Card.Text>
                  <p>
                    <a href="/"> mealdb@gmail.com</a> Interactively grow
                    empowered for process-centric total linkage.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <div className="icon">
                    {" "}
                    <FiPhoneCall></FiPhoneCall>
                  </div>
                  <h4>Call Us</h4>
                </Card.Title>
                <hr />
                <Card.Text>
                  <p>
                    <a href="/"> +012345-67900</a> IDistinctively disseminate
                    focused solutions clicks-and-mortar ministate..
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <div className="icon">
                    {" "}
                    <ImLocation></ImLocation>
                  </div>
                  <h4>Location</h4>
                </Card.Title>
                <hr />
                <Card.Text>
                  <p>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
