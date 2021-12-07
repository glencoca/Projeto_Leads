import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  ContatoBanner,
  ContatoBody,
  ContatoDiv,
} from "../components/contatos/_contato_styles";
import TabBarComponent from "../components/global/tab_bar/_tab_bar_component";
import ContatoListBannerImg from "../assets/images/ImgsBannerContatosList.png";
import {
  BannerH1,
  ContatoDivGroup,
  ContatoDivInfo,
  ContatoDivInfos,
  ContatoDivv,
  ContatoEmpresaLink,
  ContatoLine,
  ContatoListbannerBottom,
  UserContatoName,
  UserEmpresaName,
} from "../components/contatosList/_contatoList_styles";
import {
  ImgContato,
  UserDiv,
  UserDivInfo,
  UserEmpresaHistory,
  UserNameHistory,
} from "../components/Empresa/_Empresa_styles";
import ImgContatoList from "../assets/images/user-02.png";
import api from "../services/api/api_service";

const ContatoLista: NextPage = () => {
  const [list, setlist] = useState([
    {
      nome: "João",
      empresa: "SpaceX",
    },
    {
      nome: "Felipe",
      empresa: "Senai",
    },
    {
      nome: "Mateus",
      empresa: "Nike",
    },
  ]);

  const listarContatos = async () => {
    const resposta = await api.get("/contatos", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    setlist(resposta.data);
  };

  useEffect(() => {}, []);

  return (
    <ContatoBody>
      <ContatoDivv>
        <ContatoBanner imgBanner={ContatoListBannerImg.src}>
          <BannerH1>Contatos</BannerH1>
        </ContatoBanner>
        <ContatoListbannerBottom>
          {list.map((c) => {
            return (
              <ContatoDivGroup>
                <ContatoDivInfos>
                  <ImgContato imgBanner={ImgContatoList.src}></ImgContato>
                  <ContatoDivInfo>
                    <UserEmpresaName>{c.empresa}</UserEmpresaName>
                    <UserContatoName>{c.nome}</UserContatoName>
                  </ContatoDivInfo>
                  <ContatoEmpresaLink>Ir para a empresa</ContatoEmpresaLink>
                </ContatoDivInfos>
              </ContatoDivGroup>
            );
          })}
        </ContatoListbannerBottom>
      </ContatoDivv>
      <TabBarComponent />
    </ContatoBody>
  );
};

export default ContatoLista;
