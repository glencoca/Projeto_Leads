import styled from "styled-components";

export const IndexBody = styled.body`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => props.theme.themes.dark_background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IndexText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  color: ${(props) => props.theme.colors.branco};
  margin-bottom: 10px;
  font-weight: 400;
`;

export const IndexLink = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    color: ${(props) => props.theme.colors.verde};
    font-weight: 600;
`;
