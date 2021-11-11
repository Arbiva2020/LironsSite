import React from "react";
import {Card} from "react-bootstrap";

function Reviews() {
  return (
    <div>
      <div>
        <h1>לקוחות מספרים עליי</h1>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Reviews;
