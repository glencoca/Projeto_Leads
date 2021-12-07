import styled from "styled-components";

export const DashbordBody = styled.body`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.theme.themes.dark_background};


`;

export const DashbordBodyContent = styled.div`
  padding: 50px 95px;
`;

export const DashbordCardSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1360px) {
    flex-direction: column;
    height: 100%;
}
`;

export const DashbordGraficoListaSection = styled.section`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;

  @media screen and (max-width: 1360px) {
    flex-direction: column;
}
`;
