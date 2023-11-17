import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./modalCarrinho.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductWarrant from "../../core/ProductWarranty.jsx";
import mockImages from "../../assets/models/mockImagesCarousel.js";

const ModalCarrinho = ({ obj }) => {
  let [objChangeForImage, setObjtChangeClient] = useState({
    img: "./images/amarelo.jpg",
    idItem: 10,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowImageModal = (imagem, id, e) => {
    e;
    objChangeForImage = {
      img: imagem,
      idItem: id,
    };
    return objChangeForImage;
  };

  const valuePortion = (valueTotalProduct, qtdportions) => {
    return valueTotalProduct - valueTotalProduct / qtdportions;
  };
  {
    console.log(obj);
  }

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
          <Modal.Title>adicionar ao carrinho</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <div className="content_accordeon">
            <figure className="content_images">
              <img className="first_img" src={objChangeForImage.img}></img>

              <div className="content_others_images">
                {mockImages.map((item, i) => {
                  return (
                    <img
                      onClick={(e) =>
                        setObjtChangeClient(
                          handleShowImageModal(item.img, i),
                          e
                        )
                      }
                      src={item.img}
                      alt=""
                      key={i}
                    />
                  );
                })}
              </div>
            </figure>
            <div className="content_infos_accordion">
              <div className="content_text">
                <p>
                  {obj.nameProduct}
                  <br></br>
                  R${valuePortion(obj.valueProduct, obj.qtdParcelaSemJuros)},00
                  {"   "}
                  {obj.qtdParcelaSemJuros}x Sem juros
                  <br></br>
                  {obj.qtdDescontPix}% de desconto no PIX
                </p>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="headerAccordeon">
                    Quantidade
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="number" className="inputNumber" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="headerAccordeon">
                    Descrição
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{obj.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="headerAccordeon">
                    Termo de garantia
                  </Accordion.Header>
                  <Accordion.Body>
                    <ProductWarrant src="./images/garantiaAnimaisWaterLife.pdf" />
                    <div className="contentAcceptedAwarrant">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          id="chk1"
                          className="checkbox"
                          name="chk"
                        />

                        <label htmlFor="chk1">Aceite os termos de garantia</label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal_footer_buttons">
          <Button className="createActive" onClick={handleClose}>
            confirmar
          </Button>
          <Button className="deleteOrCancel" onClick={handleClose}>
            cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCarrinho;
