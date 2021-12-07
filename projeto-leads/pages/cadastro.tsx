import Image from "next/image";
import React, { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import {
  CadastroBody,
  CadastroCard,
  CadastroCardButton,
  CadastroCardButtonContainer,
  CadastroCardDivider,
  CadastroCardDividerLine,
  CadastroCardDividerP,
  CadastroCardFormContainer,
  CadastroCardInput,
  CadastroCardInputContainer,
  CadastroCardlabel,
  CadastroCardLinkCadastroP,
  CadastroCardLinkCadastroSpan,
  CadastroCardTitle,
} from "../components/cadastro/_cadastro_styles";
import ilustracao_Cadastro from "../assets/images/login_ilustracao.png";
import email_icon from "../assets/icons/email_black_24dp.png";
import senha_icon from "../assets/icons/lock_black_24dp.png";
import user_icon from "../assets/icons/person_black_24dp.png";
import autenticacao_image from "../assets/images/logoMicrosoft.png";

const Cadastro: NextPage = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <CadastroBody>
      <Image
        src={ilustracao_Cadastro}
        objectFit="fill"
        alt="Imagem de fundo da tela de Cadastro"
      />
      <CadastroCard>
        <CadastroCardTitle>Seja bem-vindo!</CadastroCardTitle>
        <CadastroCardFormContainer>
          <CadastroCardInputContainer>
            <CadastroCardlabel>Nome</CadastroCardlabel>
            <CadastroCardInput
              imagem={user_icon.src}
              onChange={(e) => setNome(e.target.value)}
            />
          </CadastroCardInputContainer>
          <CadastroCardInputContainer>
            <CadastroCardlabel>E-mail</CadastroCardlabel>
            <CadastroCardInput
              imagem={email_icon.src}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CadastroCardInputContainer>
          <CadastroCardInputContainer>
            <CadastroCardlabel>Senha</CadastroCardlabel>
            <CadastroCardInput
              imagem={senha_icon.src}
              onChange={(e) => setSenha(e.target.value)}
            />
          </CadastroCardInputContainer>
          <CadastroCardButtonContainer>
            <CadastroCardButton type="submit">Cadastrar</CadastroCardButton>
            <CadastroCardLinkCadastroP>
              Já possui conta?
              <CadastroCardLinkCadastroSpan href="/login">
                Faça login
              </CadastroCardLinkCadastroSpan>
            </CadastroCardLinkCadastroP>
          </CadastroCardButtonContainer>
        </CadastroCardFormContainer>
        <CadastroCardDivider>
          <CadastroCardDividerLine></CadastroCardDividerLine>
          <CadastroCardDividerP>ou</CadastroCardDividerP>
          <CadastroCardDividerLine></CadastroCardDividerLine>
        </CadastroCardDivider>
        <Image src={autenticacao_image} alt="Logo da Microsoft" />
      </CadastroCard>
    </CadastroBody>
  );
};

export default Cadastro;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};