import styled from "styled-components";

export const ModalTop = styled.div`
  height: 10%;
  width: 100%;
  padding: 2em 2em;
  display: flex;
  align-items: center;
`;
export const ModalDivBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ModalTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  margin-right: 64%;
  font-weight: 250;
  font-size: 36px;
  line-height: 54px;
  color: ${(props) => props.theme.colors.preto};
`;
export const ModalDivInpus = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  align-items: center;
  padding-right: 10%;
`;
export const ModalText = styled.p`
width: 30%;
  font-family: Poppins;
  font-style: normal;
  text-align: right;
  margin-right: 5%;
  font-weight: 300;
  font-size: 18px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.preto};
`;
export const ModalInput = styled.input`
  width: 85%;
  height: 65%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  padding-left: 1em;
  outline: 0;
  color: #000000;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const ModalInputDateDiv = styled.div`
    width:85%;
`;
export const ModalInputDate = styled.input`
  width: 55%;
  height: 65%;
  padding-left: 1em;
  outline: 0;
  font-family: Poppins;
  padding-left: 1em;
  padding-right: 1em;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: #000000;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const ModalBotãoConfirmar = styled.button`
  width: 30%;
  height: 10%;
  font-family: Poppins;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  line-height: 36px;
  color: ${(props) => props.theme.colors.branco};
  background-color: ${(props) => props.theme.colors.verde};
  border-radius: 10px;
`;
