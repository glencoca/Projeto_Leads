import { GetStaticProps, NextPage } from "next";
import React, { Children, useEffect, useState } from "react";
import CardComponent from "../components/leads/card/_card_component";
import Status from "../components/leads/card/_enum_status";
import ColumnComponent from "../components/leads/column/_column_component";
import Image from "next/dist/client/image";
import {
  HeaderDiv,
  LeadsBody,
  LeadsBotaoMais,
  LeadsHeader,
  LeadsIconFilter,
  LeadsLogo,
  LeadsMain,
  LeadsMainContent,
} from "../components/leads/_leads_style";

import filter_icon from "../assets/icons/filter_icon.png";
import TabBarComponent from "../components/global/tab_bar/_tab_bar_component";
import DragAndDrop from "../utils/drag_and_drop/drag_and_drop";
import BotaoAdicionar from "../assets/images/botaoMais.png";
import Logo from "../assets/images/Logo GLEN.png";
import EmpresaModalEmpresa from "../components/leads/newEmpModal/_modal_novaEmpresa";
import api from "../services/api/api_service";

type Props = {
  data: any;
};
const Leads: NextPage<Props> = ({ data }: Props) => {
  const [showModalEmpresa, setShowModalEmpresa] = useState(false);
  const openAndCloseModalEmpresa = () => setShowModalEmpresa(!showModalEmpresa);
  useEffect(() => {
    DragAndDrop();
  }, []);

  const [list, setlist] = useState([
    {
      nomeUser: "João",
      empresa: "SpaceX",
      temperatura: 64,
      idUsuario: 1,
      nomeTipoStatus: "Iniciando"
    },
    {
      nome: "Felipe",
      empresa: "Nike",
      temperatura: 25,
      idUsuario: 2,
      nomeTipoStatus: "Avançando"
    },
    {
      nome: "Matheus",
      empresa: "Extra",
      temperatura: 64,
      idUsuario: 3,
      nomeTipoStatus: "Estagnado"
    },
    {
      nome: "Matheus",
      empresa: "Extra",
      temperatura: 64,
      idUsuario: 4,
      nomeTipoStatus: "Finalizado"
    },
  ]);

  const listarContatos = async () => {
    const resposta = await api.get("/clientes", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    setlist(resposta.data);
  };

  useEffect(() => {}, []);

  return (
    <LeadsBody>
      <LeadsHeader>
        <LeadsLogo>
          <Image src={Logo} alt="Logo GLEN" />
        </LeadsLogo>
        <HeaderDiv>
          <LeadsBotaoMais>
            <Image
              src={BotaoAdicionar}
              onClick={openAndCloseModalEmpresa}
              alt="Ícone de filtro"
            />
          </LeadsBotaoMais>
          <EmpresaModalEmpresa
            openAndCloseModalEmpresa={openAndCloseModalEmpresa}
            showModalEmpresa={showModalEmpresa}
          ></EmpresaModalEmpresa>
          <LeadsIconFilter>
            <Image src={filter_icon} alt="Ícone de Adicionar Empresa" />
          </LeadsIconFilter>
        </HeaderDiv>
      </LeadsHeader>
      <LeadsMain>
        <LeadsMainContent>
          {
          list.map((c) => {
            return (
              <ColumnComponent
              key={c.idUsuario}
                data={[
                  <CardComponent status={Status.Estagnado} empresa={c.empresa} nome={c.nomeUser} hot={100} key={c.idUsuario} />
                ]}
              >
                {data}
              </ColumnComponent>
            );
          })}
        </LeadsMainContent>
      </LeadsMain>
      <TabBarComponent />
    </LeadsBody>
  );
};

export default Leads;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: true,
  };
};
