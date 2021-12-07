import React, { useEffect, useState } from "react";
import {
  DashbordGraficoBody,
  DashbordGraficoContent,
  DashbordGraficoHeader,
  DashbordGraficoHeaderH1,
} from "./_dashbord_grafico_style";
import { api } from "../../../services/api/google_charts_api";
import Chart from "react-google-charts";
import Image from "next/dist/client/image";

import user_dashbord from "../../../../assets/images/user_dashbord.png";
import { DashbordCardImageBackground } from "../card/_dashbord_card_style";

const DashbordGraficoComponent = () => {
  const [dataChart, setDataChart] = useState([]);
  const dados = [
    ["Status", "Status dos Leads"],
    ["Inicial", 3],
    ["Em contato", 5],
    ["Negociando", 4],
    ["Aguardando resposta", 2],
    ["Negócio fechado", 5],
  ];
  return (
    <DashbordGraficoBody>
      <DashbordGraficoHeader>
        <DashbordGraficoHeaderH1>Status dos Leads</DashbordGraficoHeaderH1>
      </DashbordGraficoHeader>
      {/* <DashbordGraficoImageContent>
        <Image src={user_dashbord} alt="Imagem de usuário" />
      </DashbordGraficoImageContent> */}
      <DashbordGraficoContent>
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="PieChart"
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            backgroundColor: "transparent",
            pieHole: 0.6,
            colors: ["#2ECC71", "#04264A", "#F0EE51", "#F03A3C", "#161616"],
          }}
          // toolbarItems={[
          //   {
          //     type: "csv",
          //     datasource: "http://localhost:3000",
          //   },
          // ]}
        />
      </DashbordGraficoContent>
    </DashbordGraficoBody>
  );
};

export default DashbordGraficoComponent;
