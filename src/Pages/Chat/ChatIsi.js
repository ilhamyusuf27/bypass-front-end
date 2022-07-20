import React from "react";
import { Container, Row, Card } from "react-bootstrap";

import EmptyChat from "../../Assets/Images/empty-chat.png";
import "./Chat.css";

function ChatIsi() {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card className="card mt-5 ">
              <Card.Header as="h5">Chat</Card.Header>
              list nama
            </Card>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Card className="mt-5">
              <Card.Header as="h5" className="empty-header"></Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ChatIsi;
