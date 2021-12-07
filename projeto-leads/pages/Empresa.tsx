import React, { Children, useEffect, useState } from "react";
import { AnotacaoLinkDiv, ContatoBanner, ContatoBottom, ContatoH1, EmpresaBanner, EmpresabannerBottom, EmpresaBannerImg, EmpresaBody, EmpresaDiv, EmpresaHistorybanner, EmpresaHistoryBottom, EmpresaInfo, EmpresaLineCnpj, EmpresaLineName, EmpresaLineRazao, EmpresaText, EmpresaTextInfo, HistoryButton, HistoryButtonText, HistoryDiv, HistoryLine, HistoryP, HistoryPBold, HistoryPBoldName, HistoryPDate, HistoryText, HistoryText1, HistoryText2, ImgContato, UserDiv, UserDivInfo, UserEmpresaHistory, UserNameHistory } from "../components/Empresa/_Empresa_styles";
import TabBarComponent from "../components/global/tab_bar/_tab_bar_component";
import infoimgs from "../assets/images/infoimgs.png"
import HistoryImg from "../assets/images/HistoryImg.png"
import ContatosImg from "../assets/images/ContatosIMG.png"
import HistoryImgButton from "../assets/images/Vector.png";
import ImgContatoList from "../assets/images/user-02.png";
import { NextPage } from "next";
import EmpresaModal from "../components/global/empresa/_modal_emp";
import EmpresaModalContato from "../components/global/empresa/_modal_emp_contato";
import api from "../services/api/api_service";



const Empresa: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const openAndCloseModal = () => setShowModal(!showModal);
  const [showModalContato, setShowModalContato] = useState(false);
  const openAndCloseModalContato = () => setShowModalContato(!showModal);

  return (
    <EmpresaBody>
      <EmpresaDiv>
        <EmpresaInfo>
            <EmpresaBanner imgBanner={infoimgs.src}>
              <EmpresaBannerImg>
              </EmpresaBannerImg>
            </EmpresaBanner>
            <EmpresabannerBottom>
              <EmpresaTextInfo>Razão Social</EmpresaTextInfo>
              <EmpresaText>SpaceX</EmpresaText>
              <EmpresaLineName></EmpresaLineName>
              <EmpresaTextInfo>Cnpj</EmpresaTextInfo>
              <EmpresaText>XX. XXX. XXX/0001-XX</EmpresaText>
              <EmpresaLineRazao></EmpresaLineRazao>
              <EmpresaTextInfo>Nome Fantasia</EmpresaTextInfo>
              <EmpresaText>Space Exploration Technologies Corp</EmpresaText>
              <EmpresaLineCnpj></EmpresaLineCnpj>
              <EmpresaTextInfo>Marcas/Produtos</EmpresaTextInfo>
              <EmpresaText>Foguetes e explorações espaciais</EmpresaText>
            </EmpresabannerBottom>
        </EmpresaInfo> 
        <EmpresaInfo>
            <EmpresaHistorybanner imgBanner={HistoryImg.src}>
            <ContatoH1>Historico</ContatoH1>
            </EmpresaHistorybanner>
            <EmpresaHistoryBottom>
              <HistoryDiv onClick={openAndCloseModal}>
              <EmpresaModal openAndCloseModal={openAndCloseModal} showModal={showModal}></EmpresaModal>
              <HistoryButtonText>Nova Anotação</HistoryButtonText>
              <HistoryButton imgBanner={HistoryImgButton.src}></HistoryButton>
              </HistoryDiv>
              <HistoryText>
                <HistoryText1><HistoryP>Proposta enviada:</HistoryP><HistoryPBold>Arquivo</HistoryPBold></HistoryText1>
                <HistoryText2><HistoryPDate>09/10/2021 - 12:06</HistoryPDate><HistoryPBoldName>Matheus Roxo</HistoryPBoldName></HistoryText2>
              </HistoryText>
                <HistoryLine></HistoryLine>
                <HistoryText>
                <HistoryText1><HistoryP>Proposta enviada:</HistoryP><HistoryPBold>Arquivo</HistoryPBold></HistoryText1>
                <HistoryText2><HistoryPDate>09/10/2021 - 12:06</HistoryPDate><HistoryPBoldName>Matheus Roxo</HistoryPBoldName></HistoryText2>
              </HistoryText>
                <HistoryLine></HistoryLine>
                <HistoryText>
                <HistoryText1><HistoryP>Proposta enviada:</HistoryP><HistoryPBold>Arquivo</HistoryPBold></HistoryText1>
                <HistoryText2><HistoryPDate>09/10/2021 - 12:06</HistoryPDate><HistoryPBoldName>Matheus Roxo</HistoryPBoldName></HistoryText2>
              </HistoryText>
                <HistoryLine></HistoryLine>
                <HistoryText>
                <HistoryText1><HistoryP>Proposta enviada:</HistoryP><HistoryPBold>Arquivo</HistoryPBold></HistoryText1>
                <HistoryText2><HistoryPDate>09/10/2021 - 12:06</HistoryPDate><HistoryPBoldName>Matheus Roxo</HistoryPBoldName></HistoryText2>
              </HistoryText>
                <HistoryLine></HistoryLine>
            </EmpresaHistoryBottom>
          </EmpresaInfo>
          <EmpresaInfo>
            <ContatoBanner imgBanner={ContatosImg.src}>
              <ContatoH1>Contatos</ContatoH1>
            </ContatoBanner>
            <ContatoBottom>
            <HistoryDiv onClick={openAndCloseModalContato}>
            <EmpresaModalContato openAndCloseModalContato={openAndCloseModalContato} showModalContato={showModalContato}></EmpresaModalContato>
              <HistoryButtonText>Novo Contato</HistoryButtonText>
              <HistoryButton imgBanner={HistoryImgButton.src}></HistoryButton>
              </HistoryDiv>
              <AnotacaoLinkDiv href="/contato">
              <UserDiv>
              <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
              <UserDivInfo>
              <UserEmpresaHistory>SpaceX</UserEmpresaHistory>
              <UserNameHistory>Douglas Novais</UserNameHistory>
              </UserDivInfo>
              </UserDiv>
              <UserDiv>
              <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
              <UserDivInfo>
              <UserEmpresaHistory>SpaceX</UserEmpresaHistory>
              <UserNameHistory>Douglas Novais</UserNameHistory>
              </UserDivInfo>
              </UserDiv>
              <UserDiv>
              <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
              <UserDivInfo>
              <UserEmpresaHistory>SpaceX</UserEmpresaHistory>
              <UserNameHistory>Douglas Novais</UserNameHistory>
              </UserDivInfo>
              </UserDiv>
              <UserDiv>
              <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
              <UserDivInfo>
              <UserEmpresaHistory>SpaceX</UserEmpresaHistory>
              <UserNameHistory>Douglas Novais</UserNameHistory>
              </UserDivInfo>
              </UserDiv>
              <UserDiv>
              <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
              <UserDivInfo>
              <UserEmpresaHistory>SpaceX</UserEmpresaHistory>
              <UserNameHistory>Douglas Novais</UserNameHistory>
              </UserDivInfo>
              </UserDiv>
              <UserDiv>
              <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
              <UserDivInfo>
              <UserEmpresaHistory>SpaceX</UserEmpresaHistory>
              <UserNameHistory>Douglas Novais</UserNameHistory>
              </UserDivInfo>
              </UserDiv>
              </AnotacaoLinkDiv>
            </ContatoBottom>
          </EmpresaInfo>
      </EmpresaDiv>
      <TabBarComponent/>
    </EmpresaBody>
  );
};

export default Empresa;
