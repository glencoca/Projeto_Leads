import styled from "styled-components";

export const ModalTop = styled.div`
  height: 10%;
  width: 100%;
  padding: 2em 2em;
  display: flex;
  align-items: center;
`;
export const ModalTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  margin-right: 61%;
  font-weight: 250;
  font-size: 30px;
  line-height: 54px;
  color: ${(props) => props.theme.colors.preto};
`;