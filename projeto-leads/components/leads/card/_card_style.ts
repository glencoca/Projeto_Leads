import styled from "styled-components";
import Status from "./_enum_status";

interface background_color {
  status: Status;
}

export const CardBody = styled.div<background_color>`
  width: 310px;
  height: fit-content;
  border-radius: 10px;
  background-color: ${(props) => props.status};
  filter: drop-shadow(0px 2px 4px rgba(22, 22, 22, 0.25));
  border: 1px solid #ced4da;
  padding: 10px 15px;
  margin-top: 5px;
  margin-bottom: 5px;

  &:hover{
    cursor: pointer;
  }
  &:hover {
    transform: scale(
      1.03
    ); 
    transition: transform 0.2s;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100px;
  z-index: 1000;
  inset: 0px;
  position: fixed;
  inset: 0px;

`;

export const CardLineNameStatus = styled.div`
  padding: 0px 10px;
  width: 100%;
  height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardLineName = styled.h3`
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.preto};
`;

export const CardLineStatus = styled.div<background_color>`
  width: 100px;
  height: 27px;
  border-radius: 10px;
  background-color: ${(props) => props.status.replace("0.4", "1")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardLineStatusText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.colors.branco};
  font-size: 14px;
  text-align: center;
`;



export const CardLineContactText = styled.h3`
width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.preto};
`;

export const CardLineResp = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardLineRespSelect = styled.select`
  padding-left: 10px;
  margin-top: 10px;
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.cinza_texto};

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.branco};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const CardLineRespOption = styled.option`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.cinza_texto};
`;

export const CardLineContactAndHotContainer = styled.div`
padding: 0px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
    margin-top: 10px;

`;

export const CardLineHotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.colors.vermelho};
`;

/* Estilização do Modal */



