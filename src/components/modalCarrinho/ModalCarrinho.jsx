// import PropTypes from "prop-types";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./modalCarrinho.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCarrinho = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="content_Modal_Carrinho">
      <button className="container-fluid" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="White"
          className="img-fluid bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <p>Carrinho</p>
      </button>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="headerModal">
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <div className="content_accordeon">
            <figure className="content_images">
              <img className="first_img" src="./images/amarelo.jpg"></img>
              <div className="content_others_images">
                <img src="./images/laranjinha.jpg" alt="" />
                <img src="./images/nemo.jpg" alt="" />
              </div>
            </figure>
            <div className="content_infos_accordion">
              <div className="content_text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  fugit cum, tenetur, praesentium explicabo reprehenderit
                  excepturi perspiciatis ut soluta veniam porro similique saepe?
                  Tempore reprehenderit expedita ad qui cum unde.
                </p>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="headerAccordeon">
                    Quantidade
                  </Accordion.Header>
                  <Accordion.Body>1</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="headerAccordeon">
                    Descrição
                  </Accordion.Header>
                  <Accordion.Body>2</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="headerAccordeon">
                    Termo de garantia
                  </Accordion.Header>
                  <Accordion.Body>3</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalCarrinho.propTypes = {};

export default ModalCarrinho;
