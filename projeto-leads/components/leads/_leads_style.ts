import styled from "styled-components";

export const LeadsBody = styled.body`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => props.theme.themes.dark_background};
`;

export const LeadsHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 50px 95px;
`;

export const LeadsMain = styled.div`
`;

export const LeadsMainContent = styled.div`
  height: 100%;
  padding: 0px 95px;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
`;

export const LeadsLogo = styled.div`
  width: 100px;
  height: 48px;
`;
export const HeaderDiv = styled.div`
  width: 107px;
  margin-left: 80%;
  height: 48px;
  display: flex;
`;
export const LeadsBotaoMais = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 4px 4px 4px rgba(22, 22, 22, 0.5);
  &:hover {
    cursor: pointer;
  }
  &:hover {
    transform: scale(
      1.06
    ); 
    transition: transform 0.2s;
  }
`;
export const LeadsIconFilter = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 4px 4px 4px rgba(22, 22, 22, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  &:hover {
    transform: scale(
      1.06
    ); 
    transition: transform 0.2s;
  }
`;
export const ModalDivHeader = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 1%;
`;
export const ModalHeaderH2 = styled.a`
  font-family: Poppins;
  margin-right: 68%;
  font-style: normal;
  font-weight: normal;
  cursor: pointer;
  font-size: 24px;
  text-decoration: underline;
  line-height: 36px;
  color: ${(props) => props.theme.colors.verde};
`;
export const ModalInfo = styled.div`
  width: 98%;
  height: 80%;
  display: flex;
`;
export const ModalInfoDiv = styled.div`
  height: 80%;
  width: 55%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const ModalInfoDiv2 = styled.div`
  height: 100%;
  width: 30%;
  margin-top: 2%;
`;
export const ModalDivRange = styled.div`
  height: 100%;
  width: 15%;
  padding-top: 15%;
  padding-bottom: 9%;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
`;
export const ModalDivRangeTwo = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
`;
export const ModalRange = styled.input`
  transform: rotate(270deg);
  margin-bottom: 40%;
`;
export const ModalP = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: start;
  width: 80%;
  line-height: 36px;
  color: ${(props) => props.theme.colors.preto};
  margin-top: 3%;
  margin-bottom: 3%;
`;
export const ModalInput = styled.input`
  padding-left: 23px;
  width: 80%;
  height: 30%;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.preto};
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
`;
export const ModalIcons = styled.div`
  padding-left: 23px;
  width: 80%;
  height: 30%;
  padding-left: 23px;
  border: 1px solid #ced4da;
  padding-right: 23px;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ModalInfo2 = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-evenly;
  overflow: auto;
  flex-direction: column;
  height: 80%;
`;
export const ModalInfo3 = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  padding-right: 10%;
`;
export const ModalStatusAtual = styled.div`
  width: 90%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.verde};
  color: ${(props) => props.theme.colors.branco};
  font-family: Poppins;
  font-style: normal;
  align-items: center;
  margin-right: 20%;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  border: 1px solid rgba(46, 204, 113, 0.5);
  border-radius: 10px;
`;
export const ModalStatus = styled.button`
  width: 70%;
  height: 80%;
  background-color: ${(props) => props.theme.colors.verde};
  color: ${(props) => props.theme.colors.branco};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  border: 1px solid rgba(46, 204, 113, 0.5);
  border-radius: 10px;
`;
export const ModalPStatus = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: start;
  width: 30%;
  line-height: 36px;
  color: ${(props) => props.theme.colors.preto};
  margin-top: 3%;
  margin-bottom: 3%;
`;
export const ModalTr = styled.div`
  width:90%;
  height:1px;
  background-color: ${(props) => props.theme.colors.preto};
`;
export const ModalStatusVerde = styled.button`
  width: 70%;
  height: 15%;
  background-color: ${(props) => props.theme.colors.verde};
  color: ${(props) => props.theme.colors.branco};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  border: 1px solid rgba(46, 204, 113, 0.5);
  border-radius: 10px;
  &:hover {
    transform: scale(
      1.03
    ); 
    transition: transform 0.2s;
  }
`;
export const ModalStatusVermelho = styled.button`
  width: 70%;
  height: 15%;
  background-color: ${(props) => props.theme.colors.vermelho};
  color: ${(props) => props.theme.colors.branco};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  border: 1px solid rgba(46, 204, 113, 0.5);
  border-radius: 10px;
  &:hover {
    transform: scale(
      1.03
    ); 
    transition: transform 0.2s;
  }
`;
export const ModalStatusPreto = styled.button`
  width: 70%;
  height: 15%;
  background-color: ${(props) => props.theme.colors.preto};
  color: ${(props) => props.theme.colors.branco};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  border: 1px solid rgba(46, 204, 113, 0.5);
  border-radius: 10px;
  &:hover {
    transform: scale(
      1.03
    ); 
    transition: transform 0.2s;
  }
`;
export const ModalStatusAzul = styled.button`
  width: 70%;
  height: 15%;
  background-color: ${(props) => props.theme.colors.azul};
  color: ${(props) => props.theme.colors.branco};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  border: 1px solid rgba(46, 204, 113, 0.5);
  border-radius: 10px;
  &:hover {
    transform: scale(
      1.03
    ); 
    transition: transform 0.2s;
  }
`;