// import PropTypes from "prop-types";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./modalCarrinho.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import mockImages from "../../assets/models/mockImagesCarousel.js";

const ModalCarrinho = () => {
  let [objChangeForImage,setObjtChangeClient] = useState({img:'./images/amarelo.jpg',idItem:10}) ;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowImageModal = (imagem, id, e) =>{
    e;
    objChangeForImage ={
      img : imagem,
      idItem:id
    }
    return objChangeForImage;
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
                {
                  mockImages.map((item, i )=>{
                    return(
                      <img onClick={(e)=>(setObjtChangeClient(handleShowImageModal(item.img, i),e))} src={item.img} alt=""  key={i}/>
                    )
                  })
                  
                }
                
              </div>
            </figure>
            <div className="content_infos_accordion">
              <div className="content_text">
                <p>
                  PEIXE PALHAÇO
                  5X r$ 143,00
                  10%  DESC. PIX
                  ATÉ 12x r$40,00
                </p>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="headerAccordeon">
                    Quantidade
                  </Accordion.Header>
                  <Accordion.Body>
                    <input type="number" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="headerAccordeon">
                    Descrição
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam rem cum obcaecati voluptas? Laborum, totam. Odio aspernatur, voluptatibus ullam doloribus inventore, corporis debitis, architecto facere repudiandae delectus vitae deleniti asperiores!</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="headerAccordeon">
                    Termo de garantia
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde cumque vitae voluptatem rem doloribus. Rerum cumque distinctio nesciunt quisquam alias error est ipsa laudantium aspernatur. Recusandae nisi animi praesentium.</p>
                    <label htmlFor="">ACEITO OS TERMOS DA GARANTIA</label>
                    <input type="checkbox"/>
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
        </Modal.Footer >
      </Modal>
    </div>
  );
};

ModalCarrinho.propTypes = {};

export default ModalCarrinho;



