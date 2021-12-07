import styled, { createGlobalStyle, css } from "styled-components";

export const CadastroBody = styled.body`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-image: ${(props) => props.theme.themes.dark_background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const CadastroCard = styled.div`
  width: 500px;
  height: 807px;
  background-color: ${(props) => props.theme.colors.branco};
  border-radius: ${(props) => props.theme.border_radius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(4px 4px 4px #161616);
  z-index: 1000;
  position: absolute;
  padding: 30px 25px;

  @media screen and (max-width: 550px) {
    width: 450px;
  }

  @media screen and (max-width: 500px) {
    width: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 350px;
  }
`;

export const CadastroCardTitle = styled.h1`
  font-weight: 400;
  font-size: 36px;
  font-style: normal;
  font-family: "Oswald", sans-serif;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

interface CadastroCardInputInterface {
  imagem: string;
}

export const CadastroCardInput = styled.input<CadastroCardInputInterface>`
  width: 450px;
  height: 55px;
  border-radius: ${(props) => props.theme.border_radius};
  border: ${(props) => props.theme.input_boder};
  background-image: url(${(props) => props.imagem});
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: 95%;
  background-color: transparent;
  padding: 5px 25px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 550px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    font-size: 16px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const CadastroCardLinkCadastroP = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.preto};
  display: flex;
  width: 100%;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const CadastroCardDividerP = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.preto};
`;
export const CadastroCardLinkCadastroSpan = styled.a`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.verde};
  margin-left: 4px;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const CadastroCardButton = styled.button`
  width: 450px;
  height: 60px;
  border-radius: ${(props) => props.theme.border_radius};
  background-color: ${(props) => props.theme.colors.verde};
  color: ${(props) => props.theme.colors.preto};
  border: none;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    width: 350px;
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const CadastroCardlabel = styled.label`
  font-size: 24px;
  font-style: normal;
  font-family: "Poppins", sans-serif;
  width: 100%;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const CadastroCardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CadastroCardFormContainer = styled.form`
  height: 471px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CadastroCardButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 102px;
`;

export const CadastroCardDivider = styled.div`
  width: 387px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    width: 350px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

export const CadastroCardDividerLine = styled.div`
  height: 1px;
  width: 150px;
  background-color: ${(props) => props.theme.colors.cinza};

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
