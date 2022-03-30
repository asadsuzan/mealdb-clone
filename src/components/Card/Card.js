import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ props }) => {
  return (
    <div>
      <div>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>
              <div className="icon">{props.icon}</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                repudiandae perspiciatis voluptas doloribus alias voluptatibus
                hic maxime porro iure, iusto quasi obcaecati quidem earum labore
                sapiente. Quod porro voluptatem doloribus dignissimos obcaecati
                et aspernatur nihil harum repellat, qui pariatur modi
                cupiditate. Rem mollitia optio nostrum quas fugiat, repellendus
                facere porro.
              </p>
              <h5 className="name">Category: </h5>
            </Card.Title>
            <hr />
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
