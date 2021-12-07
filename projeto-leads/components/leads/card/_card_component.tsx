import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import {
  CardBody,
  CardContainer,
  CardLineContactAndHotContainer,
  CardLineContactText,
  CardLineHotContainer,
  CardLineName,
  CardLineNameStatus,
  CardLineResp,
  CardLineRespOption,
  CardLineRespSelect,
  CardLineStatus,
  CardLineStatusText,
} from "./_card_style";
import Status from "./_enum_status";
import Modal from "react-modal";

import hot_image from "../../../assets/images/hot_image.png";
import Call from "../../../assets/images/call.png";
import Close from "../../../assets/images/Close.png";
import linkedin from "../../../assets/images/linkedin.png";
import message from "../../../assets/images/message.png";
import Phone from "../../../assets/images/Phone.png";
import whats from "../../../assets/images/whats.png";
import messager from "../../../assets/images/mensagem.png";

import { ModalDivHeader, ModalDivRange, ModalDivRangeTwo, ModalHeaderH2, ModalIcons, ModalInfo, ModalInfo2, ModalInfo3, ModalInfoDiv, ModalInfoDiv2, ModalInput, ModalP, ModalPStatus, ModalRange, ModalStatus, ModalStatusAzul, ModalStatusPreto, ModalStatusVerde, ModalStatusVermelho, ModalTr } from "../_leads_style";
import api from "../../../services/api/api_service";

interface Props {
  status: Status;
  hot: number;
  nome: any;
  empresa: string;
}

interface ModalStyle {
  className: String;
}


const CardComponent = ({ status, hot, nome, empresa}: Props, { className }: ModalStyle) => {
  let enums = Object.keys(status);
  const [showModal, setShowModal] = useState(false);
  const openAndCloseModal = () => setShowModal(!showModal);
  return (
    <CardBody draggable="true" status={status} className="card">
      <CardContainer onClick={openAndCloseModal} />
        <Modal 
          isOpen={showModal}
          onRequestClose={openAndCloseModal}
          className="modal_content_dark"
          overlayClassName="modal_overlay_dark"
          shouldCloseOnOverlayClick={true}
        >
          <ModalDivHeader>
            <ModalHeaderH2 href="/empresa">Ver perfil completo</ModalHeaderH2>
            <Image id="Close" src={Close} onClick={openAndCloseModal}/>
          </ModalDivHeader>
          <ModalInfo>
          <ModalInfoDiv>
            <ModalP>Nome</ModalP>
            <ModalInput readOnly placeholder='João'/>
            <ModalP>Telefone</ModalP>
            <ModalInput readOnly placeholder="(11) 98991-5309"/>
            <ModalP>Ações do contato:</ModalP>
            <ModalIcons>
            <Image src={whats}/>
            <Image src={Phone}/>
            <Image src={Call}/>
            <Image src={message}/>
            <Image src={linkedin}/>
            <Image src={messager}/>
            </ModalIcons>
          </ModalInfoDiv>
          
          <ModalInfoDiv2>
          <ModalP>Status</ModalP>
          <ModalInfo2>
            <ModalInfo3>
            <ModalPStatus>Atual:</ModalPStatus>
            <ModalStatus>Avançando</ModalStatus>
            </ModalInfo3>
            <ModalTr></ModalTr>
          <ModalStatusVerde>Avançando</ModalStatusVerde>
          <ModalStatusVermelho>Paralizado</ModalStatusVermelho>
          <ModalStatusPreto>Estagnado</ModalStatusPreto>
          <ModalStatusAzul>Finalizado</ModalStatusAzul>
          </ModalInfo2>
          </ModalInfoDiv2>
          <ModalDivRange>
            <ModalRange className='slider' type='range'/>
            <Image
              src={hot_image}
              alt="Imagem que ilustração a temperatura do cliente"
            />
          </ModalDivRange>
          </ModalInfo>
        </Modal>
        <CardLineNameStatus>
          <CardLineName>{empresa}</CardLineName>
          <CardLineStatus status={status}>
            <CardLineStatusText>{Object.keys(status[1])}</CardLineStatusText>
          </CardLineStatus>
        </CardLineNameStatus>
        <CardLineContactAndHotContainer>
          <CardLineContactText>{nome}</CardLineContactText>
          <CardLineHotContainer>
            {hot}°C
            <Image
              src={hot_image}
              alt="Imagem que ilustração a temperatura do cliente"
            />
          </CardLineHotContainer>
        </CardLineContactAndHotContainer>
      <CardLineResp>
        <CardLineRespSelect>
          <CardLineRespOption>João Silva</CardLineRespOption>
        </CardLineRespSelect>
      </CardLineResp>
    </CardBody>
    
    
  );
};
export default CardComponent;
