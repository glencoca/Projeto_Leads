import styled from "styled-components";

export const ModalTop = styled.div`
  height: 25%;
  width: 100%;
  padding: 2em 2em;
  display: flex;
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
export const ModalInput = styled.input`
  font-family: poppins;
  width: 88%;
  height: 40%;
  padding-left: 1em;
  font-weight: 250;
  font-size: 16px;
  line-height: 54px;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const Modalbottom = styled.div`
  height: 25%;
  width: 100%;
  padding: 2em 2em;
  display: flex;
  align-items: center;
`;
export const ModalInputTipo = styled.select`
  width: 60%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
export const ModalTipo = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.preto};
`;
export const ModalBotão = styled.button`
  width: 30%;
  height: 10%;
  font-family: Poppins;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5%;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.branco};
  background-color: ${(props) => props.theme.colors.verde};
  border-radius: 10px;
`;
