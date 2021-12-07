import React from "react";
import {
  TabBarContainer,
  TabBarContent,
  TabBarItem,
  TabBarItemContent,
  TabBarItemText,
} from "./_tab_bar_styles";
import Image from "next/dist/client/image";

import dashbord_icon from "../../../assets/icons/dashbord/dashbord_icon.png";
import leads_icon from "../../../assets/icons/dashbord/leads_icon.png";
import contatos_icon from "../../../assets/icons/dashbord/contatos_icon.png";
import agenda_icon from "../../../assets/icons/dashbord/agenda_icon.png";

const TabBarComponent: React.FC = () => {
  return (
    <TabBarContainer>
      <TabBarContent>
        <TabBarItem>
          <TabBarItemContent href="/dashbord">
            <Image src={dashbord_icon} alt="Ícone da Dashbord" />
            <TabBarItemText>Dashbord</TabBarItemText>
          </TabBarItemContent>
        </TabBarItem>
        <TabBarItem>
          <TabBarItemContent href='/leads'>
            <Image src={leads_icon} alt="Ícone de Leads" />
            <TabBarItemText>Leads</TabBarItemText>
          </TabBarItemContent>
        </TabBarItem>
        <TabBarItem>
          <TabBarItemContent href='contatoslista'>
            <Image src={contatos_icon} alt="Ícone de Contatos" />
            <TabBarItemText>Contatos</TabBarItemText>
          </TabBarItemContent>
        </TabBarItem>
        <TabBarItem>
          <TabBarItemContent href='#'>
            <Image src={agenda_icon} alt="Ícone da Agenda" />
            <TabBarItemText>Agenda</TabBarItemText>
          </TabBarItemContent>
        </TabBarItem>
      </TabBarContent>
    </TabBarContainer>
  );
};

export default TabBarComponent;
