import React, { Children, useState } from "react";
import Image from "next/dist/client/image";
import Modal from "react-modal"; 
import Close from "../../../assets/images/Close.png"
import { ModalTitle, ModalTop } from "./_modal_novaEmpresa_components";
import { ModalBotãoConfirmar, ModalDivBottom, ModalDivInpus, ModalInput, ModalText } from "../../global/empresa/_modal_emp_contatos_components";

  interface ModalStyle {
    className: String;
  }
  interface props{
    openAndCloseModalEmpresa: () => void;
    showModalEmpresa: boolean
  }
  const EmpresaModalEmpresa = ({openAndCloseModalEmpresa, showModalEmpresa}:props) => {
    return(
        <Modal
        isOpen={showModalEmpresa}
        onRequestClose={openAndCloseModalEmpresa}
        className="Modalbody"
        overlayClassName="modal_overlay_dark"
        shouldCloseOnOverlayClick={true}>
            <ModalTop>
                <ModalTitle>Nova Empresa</ModalTitle>
                <Image onClick={openAndCloseModalEmpresa} className="image"src={Close} alt="Botão fechar"/>
            </ModalTop>
            <ModalDivBottom>
            <ModalDivInpus>
                <ModalText>Nome</ModalText>
                <ModalInput placeholder='Digite o nome da empresa'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Nome Fantasia</ModalText>
                <ModalInput placeholder='Digite o nome fantasia da empresa'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Telefone</ModalText>
                <ModalInput placeholder='Digite o Telefone'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText >Celular</ModalText>
                <ModalInput placeholder='Digite o celular'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Linkedin</ModalText>
                <ModalInput placeholder='Link perfil do Linkedin'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Email</ModalText>
                <ModalInput placeholder='Digite o Email'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Instagram</ModalText>
                <ModalInput placeholder='Digite seu perfil'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>CNPJ</ModalText>
                <ModalInput placeholder='Digite o CNPJ' type='number'></ModalInput>
            </ModalDivInpus>
            <ModalDivInpus>
                <ModalText>Marcas/Produtos</ModalText>
                <ModalInput placeholder='Escolha o tipo de produto que a empresa oferece'></ModalInput>
            </ModalDivInpus>
            </ModalDivBottom>
            <ModalBotãoConfirmar onClick={openAndCloseModalEmpresa}>Confirmar</ModalBotãoConfirmar>
        </Modal>
      );
  }

  export default EmpresaModalEmpresa;