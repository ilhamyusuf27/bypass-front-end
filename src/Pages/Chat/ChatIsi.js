import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import "./Chat.css";

function ChatIsi() {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card className="card mt-5 pb-4">
              <Card.Header as="h5">Chat</Card.Header>
              <Card.Body>
                <div id="plist" className="people-list">
                  <ul className="list-unstyled chat-list mt-2 mb-0">
                    <li className="clearfix active">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Ilham Yusuf Alghani</div>
                        <div className="recent-chat">
                          Ok mas ilham, mau tanya...
                        </div>
                      </div>
                    </li>

                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Reza Riansyah</div>
                        <div className="recent-chat">halo..</div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Wachid Nur Afif</div>
                        <div className="recent-chat">halo</div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Apriansyah herlambang</div>
                        <div className="recent-chat">halo</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <Card className="mt-5 pb-4">
              <Card.Header as="h5">
                <div className="people-list img-header-chat">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="avatar"
                  />
                  <p className="name-header-chat">Ilham Yusuf Alghani</p>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="chat">
                    <div className="chat-history">
                      <ul className="m-b-0">
                        <li className="clearfix">
                          <div className="message my-message">
                            Ok siap, frontend landing nanti malam ya?
                          </div>
                        </li>
                        <li className="clearfix">
                          <div className="message other-message float-right">
                            Ok mas ilham, mau tanya yang scrol samping pakai apa
                            ya?
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-11">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type message..."
                    />
                  </div>
                  <div className="col-1">
                    <button type="submit" className="btn btn-send mb-3">
                      <FiSend />
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ChatIsi;
