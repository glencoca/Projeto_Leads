import styled, { keyframes } from "styled-components";

export const TabBarContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 80px;
  display: flex;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.verde};
    &:hover {
    height:85px;
    transition: height .5s;

  }
`;

export const TabBarContent = styled.div`
  height: 70px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabBarItemText = styled.p`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.colors.azul};
`;

export const TabBarItemContent = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from: { color: red};
  to: { color: black};
`;

export const TabBarItem = styled.div`
  width: 110px;
  height: 40px;
  transition: transform .5s;
  ${TabBarItemText} {
    display: none;
  }
  &:hover {
    ${TabBarItemText} {
      display: block;
    }
    height:65px;
    transform: scale(1.05);
  }
`;
