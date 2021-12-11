import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import {
  DashbordListaBody,
  DashbordListaHeader,
  DashbordListaHeaderH1,
  DashbordListaHeaderOption,
  DashbordListaHeaderSelect,
  DashbordListaInfosContato,
  DashbordListaInfosEmpresa,
  DashbordListaLi,
  DashbordListaLiInfos,
  DashbordListaLiTemperatura,
  DashbordListaTemperaturaGraus,
  DashbordListaUl,
} from "./_dashbord_lista_style";
import user from "../../../assets/images/user.png";
import fogo_icon from "../../../assets/icons/dashbord/fogo.png";
import api from "../../../services/api/api_service";

const DashbordListaComponent: React.FC = () => {
  const [list, setlist] = useState([
    {
      nome: "João",
      empresa: "SpaceX",
      temperatura: 64,
    },
  ]);

  const listarContatos = async () => {
    const resposta = await api.get("/produto/meusprodutos", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    setlist(resposta.data);
  };

  useEffect(() => {
    // listarContatos();
  }, []);

  return (
    <DashbordListaBody>
      <DashbordListaHeader>
        <DashbordListaHeaderH1>Leads mais quentes</DashbordListaHeaderH1>
        <DashbordListaHeaderSelect>
          <DashbordListaHeaderOption>Decrescente</DashbordListaHeaderOption>
          <DashbordListaHeaderOption>Crescente</DashbordListaHeaderOption>
        </DashbordListaHeaderSelect>
      </DashbordListaHeader>
      <DashbordListaUl>
        {
          list.map((c) => {
            return (
              <DashbordListaLi key={c.empresa}>
              <Image
                src={user}
                alt="Imagem da empresa"
                width={"60px"}
                height={"60px"}
              />
              <DashbordListaLiInfos>
                <DashbordListaInfosEmpresa>{c.empresa}</DashbordListaInfosEmpresa>
                <DashbordListaInfosContato>{c.nome}</DashbordListaInfosContato>
              </DashbordListaLiInfos>
              <DashbordListaLiTemperatura>
                <DashbordListaTemperaturaGraus>{c.temperatura}</DashbordListaTemperaturaGraus>
                <Image src={fogo_icon} alt="Ícone de fogo" />
              </DashbordListaLiTemperatura>
            </DashbordListaLi>
            );
          })
        }
      </DashbordListaUl>
    </DashbordListaBody>
  );
};

export default DashbordListaComponent;
