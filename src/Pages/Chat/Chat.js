import React from "react";
import { Container, Row, Card } from "react-bootstrap";

import EmptyChat from "../../Assets/Images/empty-chat.png";
import "./Chat.css";

function Chat() {
  return (
    // ini kosong
    <>
      <Container className="mb-5">
        <Row>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card className="card mt-5 card-empty">
              <Card.Header as="h5">Chat</Card.Header>
              <div className="empty-image">
                <img src={EmptyChat} alt="" />
              </div>
              <div className="info">
                <div className="info">
                  <h4>Belum ada chat</h4>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Card className="mt-5 card-empty">
              <Card.Header as="h5" className="empty-header"></Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Chat;
