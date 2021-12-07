import styled from "styled-components";

export const BannerH1 = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 2em;
  line-height: 72px;
  color: ${(props) => props.theme.colors.azul};
`;
export const ContatoDivv = styled.div`
  width: 95%;
  height: 85%;
  background-color: ${(props) => props.theme.colors.branco};
  border-radius: 10px;
  margin-bottom: 5%;
`;
interface ImgContato {
  imgBanner: string;
}
export const ImgContatoList = styled.div<ImgContato>`
  background-image: url(${(props) => props.imgBanner});
  width: 10%;
  background-size: cover;
  height: 10%;
`;
export const ContatoListbannerBottom = styled.div`
  width: 100%;
  height: 55%;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 10px -9px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 1%;
`;
export const ContatoDivGroup = styled.div`
  width: 80%;
  height: 15%;
  margin-bottom: 2.5%;
  &:hover {
    transform: scale(
      1.01
    ); 
    transition: transform 0.2s;
  }
`;
export const ContatoDivInfo = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 40%;
  @media screen and (max-width: 1300) {
}
`;
export const ContatoEmpresaLink = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  line-height: 36px;
  color: ${(props) => props.theme.colors.verde};
  cursor: pointer;
  text-align: center;
`;
export const ContatoDivInfos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1%;
`;
export const UserEmpresaName = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 27px;
  color: ${(props) => props.theme.colors.verde};
`;
export const UserContatoName = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 27px;
  color: ${(props) => props.theme.colors.preto};
`;
export const ContatoLine = styled.tr`
  width: 80%;
  height: 1px;
  background-color: black;
  margin-top: 1.5%;
  @media screen and (max-width: 1700px) {
    margin-top: 2.5%;
}
`;
