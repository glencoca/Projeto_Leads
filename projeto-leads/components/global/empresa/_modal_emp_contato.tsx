import React, { Children, useState } from "react";
import Image from "next/dist/client/image";
import Modal from "react-modal"; 
import Close from "../../../assets/images/Close.png"
import { ModalBotãoConfirmar, ModalDivBottom, ModalDivInpus, ModalInput, ModalInputDate, ModalInputDateDiv, ModalText, ModalTitle, ModalTop } from "./_modal_emp_contatos_components";

  interface ModalStyle {
    className: String;
  }
  interface props{
    openAndCloseModalContato: () => void;
    showModalContato: boolean
  }

  const EmpresaModalContato = ({openAndCloseModalContato, showModalContato}:props) => {
    return(
        <Modal
        isOpen={showModalContato}
        onRequestClose={openAndCloseModalContato}
        className="Modalbody"
        overlayClassName="modal_overlay_dark"
        shouldCloseOnOverlayClick={true}>
            <ModalTop>
                <ModalTitle>Contato</ModalTitle>
                <Image onClick={openAndCloseModalContato} className="image"src={Close} alt="Botão fechar"/>
            </ModalTop>
            <ModalDivBottom>
            <ModalDivInpus>
                <ModalText>Nome</ModalText>
                <ModalInput placeholder='Digite o Nome do contato'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Área</ModalText>
                <ModalInput placeholder='Digite a área'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Cargo</ModalText>
                <ModalInput placeholder='Digite o cargo'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Data de inicio</ModalText>
                <ModalInputDateDiv>
                <ModalInputDate type="date"></ModalInputDate>
                </ModalInputDateDiv>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Linkedin</ModalText>
                <ModalInput placeholder='Coloque o link do Linkedin'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Telefone</ModalText>
                <ModalInput placeholder='Digite o telefone'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Email</ModalText>
                <ModalInput placeholder='Digite o email'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Celular</ModalText>
                <ModalInput placeholder='Digite o Celular'></ModalInput>
            </ModalDivInpus>
            </ModalDivBottom>
            <ModalBotãoConfirmar onClick={openAndCloseModalContato} >Confirmar</ModalBotãoConfirmar>
        </Modal>
      );
  }

  export default EmpresaModalContato;