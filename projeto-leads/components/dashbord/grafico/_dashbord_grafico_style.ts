import styled from "styled-components";

export const DashbordGraficoBody = styled.div`
  position: relative;
  width: 63.5%;
  height: 600px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.branco};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1360px) {
    width: 80%;
    margin-bottom: 20px;
  }

`;

export const DashbordGraficoHeader = styled.div`
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  top: 0px;
  background-color: ${(props) => props.theme.colors.cinza};
  width: 100%;
  height: 66px;
  background-color: "#E6E6E6";
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const DashbordGraficoHeaderH1 = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.preto};
  @media screen and (max-width: 1610px) {
    font-size: 18px;
  }
`;

export const DashbordGraficoContent = styled.div`
  width: 940px;
  height: 500px;
  position: relative;

  @media screen and (max-width: 1360px) {
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 640px) {
    width: 400px;
    height: 400px;
  }
`;

// export const DashbordGraficoImageContent = styled.div`
//   margin: 0 auto;
//   position: absolute;
//   width: 120px;
//   height: 120px;
//   border-radius: 60px;
//   box-shadow: 4px 4px 4px rgba(22, 22, 22, 0.25);
//   background-color: rgba(242, 242, 242, 0.25);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
