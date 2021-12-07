import styled from "styled-components";

export const DashbordListaBody = styled.div`
  position: relative;
  width: 30%;
  height: 600px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 6px 6px 4px rgba(22, 22, 22, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1360px) {
    width: 80%;
  }
`;

export const DashbordListaHeader = styled.div`
  z-index: 1000;
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  top: 0px;
  background-color: ${(props) => props.theme.colors.cinza};
  width: 100%;
  height: 66px;
  background-color: "#E6E6E6";
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
`;

export const DashbordListaHeaderH1 = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.preto};
  @media screen and (max-width: 1610px) {
    font-size: 18px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

export const DashbordListaHeaderSelect = styled.select`
  width: 160px;
  height: 30px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.cinza_texto};
  @media screen and (max-width: 1610px) {
    font-size: 14px;
  }

  @media screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

export const DashbordListaHeaderOption = styled.option`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.cinza_texto};
`;

export const DashbordListaUl = styled.ul`
  height: 80%;
  width: 100%;
  list-style-type: none;
  padding: 15px 20px;
  overflow-y: auto;
`;

export const DashbordListaLi = styled.li`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px 20px 0px;
`;

export const DashbordListaLiInfos = styled.div`
  width: 60%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const DashbordListaInfosEmpresa = styled.h1`
  width: 100%;

  font-size: 18px;
  color: ${(props) => props.theme.colors.preto};
  font-family: "Poppins", sans-serif;
`;

export const DashbordListaInfosContato = styled.p`
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.colors.cinza_texto};
  font-family: "Poppins", sans-serif;
`;

export const DashbordListaLiTemperatura = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const DashbordListaTemperaturaGraus = styled.h1`
  width: 100%;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.vermelho};
  text-align: right;
`;
