import styled from "styled-components";

export const ColumnBody = styled.div`
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.colors.azul};
  overflow-y: auto;
  min-height: 100px;
  max-height: 70vh;
  width: 330px;
  min-width: 330px;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.cinza};
  box-shadow: 6px 6px 4px rgba(22, 22, 22, 0.5);
  margin: 0px 20px;
  padding-bottom: 46px;
  &::-webkit-scrollbar-thumb {
    background-color: #9B9B9B;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track{
  }
  &::-webkit-scrollbar {
  width: 7px;
  }
`;

export const ColumnAppBar = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnAppBarText = styled.h3`
  padding: 15px 20px;
  width: 100%;
  font-size: 24px;
  color: ${(props) => props.theme.colors.cinza_texto};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const ColumnFooter = styled.div`
  position: relative;
  bottom: 0px;
  width: 100%;
  height: 36px;
  border-radius: 10px 10px 10px 10px;
  background-color: #e6e6e6;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ColumnFooterText = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.cinza_texto};
  font-family: "Poppins", sans-serif;
`;

export const ColumnMain = styled.div`
  width: 310px;
  max-height: 280px;
`;
