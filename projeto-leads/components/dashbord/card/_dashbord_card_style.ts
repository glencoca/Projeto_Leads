import styled from "styled-components";

export const DashbordCardBody = styled.div`
  height: 25vh;
  width: 30%;
  background-color: ${(props) => props.theme.colors.branco};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 65px;
  box-shadow: 6px 6px 4px rgba(22, 22, 22, 0.2);
  @media screen and (max-width: 1360px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const DashbordCardTextContainer = styled.div`
  margin-left: 10px;
  height: 85px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

interface DashbordCardImageBackgroundInterface {
  background_color: string;
}

export const DashbordCardImageBackground = styled.div<DashbordCardImageBackgroundInterface>`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(${(props) => props.background_color});

  @media screen and (max-width: 1610px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 640px) {
    width: 55px;
    height: 55px;
  }
`;

export const DashbordCardTextH1 = styled.h1`
  width: 100%;
  font-size: 36px;
  color: ${(props) => props.theme.colors.preto};
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 1819px) {
    font-size: 30px;
  }

  @media screen and (max-width: 640px) {
    font-size: 24px;
  }
`;

export const DashbordCardTextSpan = styled.span`
  width: 100%;
  font-size: 24px;
  color: ${(props) => props.theme.colors.preto};
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 1819px) {
    font-size: 20px;
  }

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;
