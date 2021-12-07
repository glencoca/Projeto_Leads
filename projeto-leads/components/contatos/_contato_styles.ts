import styled from "styled-components";

export const ContatoBody = styled.body`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  background-color: ${(props) => props.theme.colors.azul};
`;
export const ContatoDiv = styled.div`
  width: 95%;
  height: 85%;
  background-color: ${(props) => props.theme.colors.branco};
  border-radius: 10px;
  margin-bottom: 80px;
`;
interface ContatoImgBanner {
  imgBanner: string;
}
export const ContatoBannerImg = styled.div`
  width: 329px;
  height: 250px;
  border-radius: 50%;
`;
export const ContatoBanner = styled.div<ContatoImgBanner>`
  width: 100%;
  height: 45%;
  background-color: ${(props) => props.theme.colors.cinza};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.imgBanner});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContatoImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.azul};
`;
export const ContatobannerBottom = styled.div`
  width: 100%;
  height: 55%;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 10px -9px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContatoInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
`;
export const ContatoInfoBottom = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;
export const ContatoTextBottom = styled.h2`
  width: 10%;
  text-align: center;
  font-weight: 700;
  margin-left: 23%;
  font-size: 24px;
  color: ${(props) => props.theme.colors.azul};
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 1350px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const ContatoInformacoes = styled.div`
  width: 50%;
  height: 100%;
`;
export const ContatoInfoDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  &:hover {
    transform: scale(
      1.01
    ); 
    transition: transform 0.2s;
  }
`;
export const ContatoInfoTextNormal = styled.h2`
  width: 30%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.preto};
  text-align: initial;
  @media screen and (max-width: 1350px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const ContatoInfoTextVerdeLink = styled.h2`
  font-family: Poppins;
  font-style: normal;
  width: 50%;
  font-weight: 700;
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.verde};
  text-align: end;
  @media screen and (max-width: 1350px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const ContatoInfoTextVerdeA = styled.a`
  font-family: Poppins;
  font-style: normal;
  width: 50%;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 24px;
  line-height: 36px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.verde};
  text-align: end;
  @media screen and (max-width: 1350px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const ContatoInfoTextVerde = styled.h2`
  font-family: Poppins;
  font-style: normal;
  width: 50%;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.verde};
  text-align: end;
  @media screen and (max-width: 1350px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const ContatoInfoText = styled.div`
  width: 90%;
  height: 85%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ContatoInfoLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.preto};
`;
export const ContatoInput = styled.select`
  width: 30%;
  height: 70%;
  border-radius: ${(props) => props.theme.border_radius};
  border: ${(props) => props.theme.input_boder};
  font-family: "Poppins", sans-serif;
  background: ${(props) => props.theme.colors.cinza};
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
export const AltButton = styled.button`
  width: 20%;
  height: 70%;
  margin-right: 15%;
  background: ${(props) => props.theme.colors.verde};
  border-radius: 10px;
  border: none;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.azul};
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  &:hover {
    transform: scale(
      1.02
    ); 
    transition: transform 0.2s;
  }
`;
interface ContatoInfosImgs {
  imgBanner: string;
}
export const ContatoInfosImg = styled.div<ContatoInfosImgs>`
  background-image: url(${(props) => props.imgBanner});
  width: 10%;
  height: 100%;
  background-size: 50%;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    transform: scale(
      1.05
    ); 
  }
`;
