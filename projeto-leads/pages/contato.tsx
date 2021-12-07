import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  AltButton,
  ContatoBanner,
  ContatobannerBottom,
  ContatoBody,
  ContatoDiv,
  ContatoImg,
  ContatoInfo,
  ContatoInfoBottom,
  ContatoInfoDiv,
  ContatoInfoLine,
  ContatoInformacoes,
  ContatoInfosImg,
  ContatoInfoText,
  ContatoInfoTextNormal,
  ContatoInfoTextVerde,
  ContatoInfoTextVerdeA,
  ContatoInfoTextVerdeLink,
  ContatoInput,
  ContatoTextBottom,
} from "../components/contatos/_contato_styles";
import TabBarComponent from "../components/global/tab_bar/_tab_bar_component";
import ContatoBannerImg from "../assets/images/ContatoBannerImg.png";
import ContatoInfoCall from "../assets/images/call.png";
import ContatoInfolinkedin from "../assets/images/linkedin.png";
import ContatoInfoMessage from "../assets/images/message.png";
import ContatoInfoWhats from "../assets/images/whats.png";
import api from "../services/api/api_service";

var linkedin = "https://www.linkedin.com/in/felipe-queiroz-2a5791169/";

const Contato: NextPage = () => {
  const redirectTo = () => {
    const whats = document
      .getElementById("WHATS")
      ?.innerHTML.replace("(", "")
      .replace(")", "")
      .replace("-", "");
    window.location.href = "https://wa.me/55" + whats;
  };

  return (
    <ContatoBody>
      <ContatoDiv>
        <ContatoBanner imgBanner={ContatoBannerImg.src}>
          <ContatoImg></ContatoImg>
        </ContatoBanner>
        <ContatobannerBottom>
          <ContatoInfo>
            <ContatoInformacoes>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfoTextNormal>Nome</ContatoInfoTextNormal>
                  <ContatoInfoTextVerde>Dougas Novais</ContatoInfoTextVerde>
                </ContatoInfoText>
              </ContatoInfoDiv>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfoTextNormal>Area</ContatoInfoTextNormal>
                  <ContatoInfoTextVerde>Financiero</ContatoInfoTextVerde>
                </ContatoInfoText>
              </ContatoInfoDiv>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfoTextNormal>Cargo</ContatoInfoTextNormal>
                  <ContatoInfoTextVerde>Tesoureiro</ContatoInfoTextVerde>
                </ContatoInfoText>
              </ContatoInfoDiv>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfoTextNormal>Data De Inicio</ContatoInfoTextNormal>
                  <ContatoInfoTextVerde>20/12/2020</ContatoInfoTextVerde>
                </ContatoInfoText>
              </ContatoInfoDiv>
            </ContatoInformacoes>
            <ContatoInformacoes>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfosImg
                    imgBanner={ContatoInfoCall.src}
                  ></ContatoInfosImg>
                  <ContatoInfoTextVerde>(11)5939-3294</ContatoInfoTextVerde>
                </ContatoInfoText>
              </ContatoInfoDiv>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfosImg
                    imgBanner={ContatoInfolinkedin.src}
                  ></ContatoInfosImg>
                  <ContatoInfoTextVerdeA href={linkedin}>
                    Acesse o Perfil
                  </ContatoInfoTextVerdeA>
                </ContatoInfoText>
              </ContatoInfoDiv>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfosImg
                    imgBanner={ContatoInfoWhats.src}
                  ></ContatoInfosImg>
                  <ContatoInfoTextVerdeA
                    onClick={redirectTo}
                    id="WHATS"
                    className="Whats"
                  >
                    (11)93024-3532
                  </ContatoInfoTextVerdeA>
                </ContatoInfoText>
              </ContatoInfoDiv>
              <ContatoInfoDiv>
                <ContatoInfoText>
                  <ContatoInfosImg
                    imgBanner={ContatoInfoMessage.src}
                  ></ContatoInfosImg>
                  <ContatoInfoTextVerde>
                    douglinhasbrabo@spacex.com
                  </ContatoInfoTextVerde>
                </ContatoInfoText>
              </ContatoInfoDiv>
            </ContatoInformacoes>
          </ContatoInfo>
          <ContatoInfoBottom>
            <ContatoTextBottom>Alt.Empresa</ContatoTextBottom>
            <ContatoInput></ContatoInput>
            <AltButton>Confirmar</AltButton>
          </ContatoInfoBottom>
        </ContatobannerBottom>
      </ContatoDiv>
      <TabBarComponent />
    </ContatoBody>
  );
};

export default Contato;
