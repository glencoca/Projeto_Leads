import React, { Component, useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import {
  DashbordBody,
  DashbordBodyContent,
  DashbordCardSection,
  DashbordGraficoListaSection,
} from "../components/dashbord/_dashbord_styles";
import TabBarComponent from "../components/global/tab_bar/_tab_bar_component";
import DashbordCardComponent from "../components/dashbord/card/_dashbord_card";

import person_icon from "../assets/icons/dashbord/person_green.png";
import trending_icon from "../assets/icons/dashbord/trending_up.png";
import check_circle_icon from "../assets/icons/dashbord/check_circle.png";
import DashbordGraficoComponent from "../components/dashbord/grafico/_dashbord_grafico_component";
import DashbordListaComponent from "../components/dashbord/lista/_dashbord_lista_component";
import api from "../services/api/api_service";

type Props = {
  data: Array<JSON>;
};



const Dashbord: NextPage<Props> =  ({ data }: Props) => {

  return (
    <DashbordBody>
      <DashbordBodyContent>
        <DashbordCardSection>
          <DashbordCardComponent
            image={person_icon.src}
            alt="Ícone de pessoa"
            textH1="19"
            textSpan="Leads na plataforma"
            background_color="46, 204, 113, 0.25"
          />
          <DashbordCardComponent
            image={trending_icon.src}
            alt="Ícone de tendência"
            textH1="30%"
            textSpan="Crescimento de Leads"
            background_color="4, 38, 74, 0.25"
          />
          <DashbordCardComponent
            image={check_circle_icon.src}
            alt="Ícone de acerto"
            textH1="5"
            textSpan="Negócios fechados"
            background_color="46, 204, 113, 0.25"
          />
        </DashbordCardSection>
        <DashbordGraficoListaSection>
          <DashbordGraficoComponent />
          <DashbordListaComponent />
        </DashbordGraficoListaSection>
      </DashbordBodyContent>
      <TabBarComponent />
    </DashbordBody>
  );
};

export default Dashbord;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: true,
  };
};
