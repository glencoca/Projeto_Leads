import React, { Children, useState } from "react";
import Image from "next/dist/client/image";
import Modal from "react-modal"; 
import Close from "../../../assets/images/Close.png"
import { Modalbottom, ModalBotão, ModalInput, ModalInputTipo, ModalTipo, ModalTitle, ModalTop } from "./_modal_emp_components";

  interface ModalStyle {
    className: String;
  }
  interface props{
    openAndCloseModal: () => void;
    showModal: boolean
  }

  const EmpresaModal = ({openAndCloseModal, showModal}:props) => {
    return(
        <Modal
        isOpen={showModal}
        onRequestClose={openAndCloseModal}
        className="Modalbody"
        overlayClassName="modal_overlay_dark"
        shouldCloseOnOverlayClick={true}>
          <ModalTop>
            <ModalTitle>Anotações</ModalTitle>
            <Image src={Close} alt="Botão fechar" />
          </ModalTop>
          <ModalInput placeholder='Escreva aqui...'></ModalInput>
          <Modalbottom>
            <ModalTipo>Tipo Anotação</ModalTipo>
            <ModalInputTipo placeholder='Escolha o tipo de anotação'></ModalInputTipo>
          </Modalbottom>
          <ModalBotão>Confirmar</ModalBotão>
        </Modal>
      );
  }

  export default EmpresaModal;