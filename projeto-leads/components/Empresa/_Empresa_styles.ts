import styled from "styled-components";

export const EmpresaBody = styled.body`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  background-color: ${(props) => props.theme.colors.azul};
  @media screen and (max-width: 1350px) {
    height:100%;
} 
`;
export const EmpresaDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  @media screen and (max-width: 1350px) {
    flex-direction: column;
}
`;
export const EmpresaInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
interface EmpresaImgBanner {
  imgBanner: string;
}
export const EmpresaBannerImg = styled.div`
  width: 329px;
  height: 250px;
  border-radius:50%;
  background-color: ${(props) => props.theme.colors.azul};
  @media screen and (max-width: 1700px) {
    width:200px;
    height:200px;
}
`;
export const EmpresaBanner = styled.div<EmpresaImgBanner>`
  width:600px;
  height: 499px;
  background-color: ${(props) => props.theme.colors.cinza};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.imgBanner});
  background-size: 250px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1700px) {
    width:390px;
    height: 250px;
    background-size:350px;
}
@media screen and (max-width: 1300px) {
  width:600px;
    height: 350px;
    background-size:350px;
    margin-top: 50px;
}
`;
export const EmpresabannerBottom = styled.div`
  width:600px;
  height: 499px;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 10px -9px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  @media screen and (max-width: 1700px) {
    width:390px;
    height: 390px;
    padding-bottom: 20px;
}
@media screen and (max-width: 1350px) {
    width:600px;
    height: 350px;
    margin-bottom: 50px;

}
`;
export const EmpresaTextInfo = styled.h2`
  width: 100%;
  text-align:center;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.preto};
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;
export const EmpresaLineName =styled.hr`
width: 396px;
margin-bottom: 10px;
margin-top: 10px;
@media screen and (max-width: 1700px) {
  width: 70%;
}
`;
export const EmpresaLineRazao =styled.hr`
width: 225px;
margin-bottom: 10px;
margin-top: 10px;
@media screen and (max-width: 1700px) {
  width: 150px;
}
`;
export const EmpresaLineCnpj =styled.hr`
width: 295px;
margin-bottom: 10x;
margin-top: 10px;
`;
export const EmpresaText = styled.h3`
  width: 100%;
  text-align:center;
  font-size: 24px;
  color: ${(props) => props.theme.colors.preto};
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 1700px) {
  font-size: 18px;
  }
`;
interface HistoryImgBanner{
  imgBanner: string
}
export const EmpresaHistorybanner = styled.div<HistoryImgBanner>`
  width: 600px;
  height:390px;
  background-color: ${(props) => props.theme.colors.cinza};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${(props) => props.imgBanner});
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1700px) {
    width:600px;
    height: 250px;
    background-size:400px;
}
`;
export const EmpresaHistoryBottom = styled.div`
  width: 600px;
  height: 499px;
  overflow-x:hidden;
  background-color: ${(props) => props.theme.colors.branco};
  box-shadow: 0px 4px 10px -9px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 26px;
  &::-webkit-scrollbar-thumb {
    background-color: #9B9B9B;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track{
  }
  &::-webkit-scrollbar {
  width: 7px;
  }
  @media screen and (max-width: 1700px) {
    width:600px;
    height: 390px;
}
@media screen and (max-width: 1350px) {
  margin-bottom: 50px;
}
`;
export const HistoryDiv = styled.div`
  width: 180px;
  align-items:center;
  display:flex;
  margin-bottom:25px;
  cursor: pointer;
  &:hover {
    transform: scale(
      1.03
    ); 
    transition: transform 0.2s;
  }
`;
export const HistoryButtonText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.verde};
  text-align:end;

`;
export const HistoryText = styled.div`
  width: 600px;
  height:65px;
  display:flex;
  justify-content:space-around;
  &:hover {
    transform: scale(
      1.01
    ); 
    transition: transform 0.2s;
  }
`;
export const HistoryText1 = styled.div`
  width: 279px;
  height:65px;
  align-items:center;
  display:flex;
`;
export const HistoryP = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 21px;
display:flex;
align-items:center;
line-height: 31px;
color: ${(props) => props.theme.colors.preto};
`;
export const HistoryPDate = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
color: ${(props) => props.theme.colors.preto};
`;
export const HistoryPBold = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 21px;

line-height: 31px;
color: ${(props) => props.theme.colors.verde};
`;
export const HistoryPBoldName = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
color: ${(props) => props.theme.colors.preto};
`;
export const HistoryLine =styled.hr`
width: 500px;
height: 0.5px;
background-color: black;
margin-bottom: 10px;
margin-top: 10px;
`;
export const HistoryText2 = styled.div`
  width: 170px;
  height:65px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
interface ContatosImgBanner{
  imgBanner: string
}
export const HistoryButton = styled.button<ContatosImgBanner>`
  width:33px;
  height:33px;
  background-image: url(${(props) => props.imgBanner});
  background-color: ${(props) => props.theme.colors.verde};
  background-size:25px;
  background-position: center;
  background-repeat:no-repeat;
  border:none;
  border-radius:6px;
  cursor: pointer;
`;
interface HistoryImgButton{
  imgBanner: string
}
export const ContatoBanner = styled.div<HistoryImgButton>`
  width: 420px;
  height: 411px;
  background-image: url(${(props) => props.imgBanner});
  background-color: ${(props) => props.theme.colors.cinza};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-size: 370px;
  background-repeat: no-repeat;
  background-position: center;
  display:flex;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 1700px) {
    width:300px;
    height: 250px;
    background-size:250px;
}
@media screen and (max-width: 1350px) {
    width:600px;
    height: 250px;
    background-size:300px;
}
`;
export const ContatoH1 = styled.h1`
  width: 100%;
  text-align:center;
  font-size: 36px;
  color: ${(props) => props.theme.colors.preto};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  @media screen and (max-width: 1700px) {
    font-size:30px;
}
`;
export const ContatoBottom = styled.div`
  width: 420px;
  height: 499px;
  background-color: ${(props) => props.theme.colors.branco};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top:26px;
  overflow-x: hidden;
  &::-webkit-scrollbar-thumb {
    background-color: #9B9B9B;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track{
  }
  &::-webkit-scrollbar {
  width: 7px;
  }
  box-shadow: 0px 4px 10px -9px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1700px) {
    width:300px;
    height: 390px;
    background-size:350px;

}
@media screen and (max-width: 1350px) {
    width:600px;
    height: 250px;
    margin-bottom: 50px;
}
`;
interface ImgContato{
  imgBanner: string
}
export const ImgContato = styled.div<ImgContato>`
  background-image: url(${(props) => props.imgBanner});
  width:60px;
  background-size:cover;
  height:60px;
`;
export const UserNameHistory = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.preto};
`;
export const UserEmpresaHistory = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colors.verde};
`;
export const UserDiv = styled.div`
display:flex;
cursor: pointer;
margin-bottom: 10%;
&:hover {
    transform: scale(
      1.02
    ); 
    transition: transform 0.2s;
  }
`;

export const UserDivInfo = styled.div`
width: 139px;
height: 54px;
@media screen and (max-width: 1700px) {
}
`;
export const AnotacaoLinkDiv = styled.a`
text-decoration: none;
`;