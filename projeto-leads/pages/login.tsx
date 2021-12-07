import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import {
  LoginBody,
  LoginCard,
  LoginCardButton,
  LoginCardButtonContainer,
  LoginCardDivider,
  LoginCardDividerLine,
  LoginCardDividerP,
  LoginCardFormContainer,
  LoginCardInput,
  LoginCardInputContainer,
  LoginCardlabel,
  LoginCardLinkCadastroP,
  LoginCardLinkCadastroSpan,
  LoginCardTitle,
} from "../components/login/_login_styles";
import email_icon from "../assets/icons/email_black_24dp.png";
import senha_icon from "../assets/icons/lock_black_24dp.png";
import ilustracao_login from "../assets/images/login_ilustracao.png";
import autenticacao_image from "../assets/images/logoMicrosoft.png";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";

import {
  InteractionRequiredAuthError,
  InteractionStatus,
} from "@azure/msal-browser";

const SignInButton = () => {
  const { instance, accounts, inProgress } = useMsal();
  const [apiData, setApiData] = useState(null);

  const accessTokenRequest = {
    scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"],
    account: accounts[0],
  };

  return (
    <Image
      src={autenticacao_image}
      alt="Logo da Microsoft"
      onClick={() => instance.loginRedirect(accessTokenRequest)}
    />
  );
};

function ProtectedComponent() {
  const { instance, inProgress, accounts } = useMsal();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const accessTokenRequest = {
      scopes: [
        "user.read",
        "mailboxsettings.read",
        "calendars.readwrite",
        "mail.read",
        "mail.readbasic",
        "mail.read.shared",
        "mail.readwrite",
        "tasks.readwrite",
        "directory.accessasuser.all",
        "directory.read.all",
        "directory.readwrite.all",
        "group.read.all",
        "group.readWrite.all"
      ],
      account: accounts[0],
    };
    if (!apiData && inProgress === InteractionStatus.None) {
      instance
        .acquireTokenSilent(accessTokenRequest)
        .then((accessTokenResponse) => {
          // Acquire token silent success
          let accessToken = accessTokenResponse.accessToken;
          // Call your API with token

          console.log(accessToken);

          fetch("https://graph.microsoft.com/v1.0/me/", {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          })
            .then((response) => {

              const data =  response.json()
              console.log( "Essa é a resposta:");
              console.log(data)

            
            })
            .catch((erro) => {
              console.log(erro);
            });
        })
        .catch((error) => {
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect(accessTokenRequest);
          }
          console.log(error);
        });
    }
  }, [instance, accounts, inProgress, apiData]);

  return <p>Return your protected content here: {apiData}</p>;
}

const WelcomeUser = () => {
  const { accounts } = useMsal();

  if (accounts[0] == null) {
    return <p>Usuário não autenticado</p>;
  }
  const username = accounts[0].username;

  return <p>Olá, {username}</p>;
};

const SignOutButton = () => {
  const { instance } = useMsal();

  return <button onClick={() => instance.logoutRedirect()}>Deslogar</button>;
};

import {
  PublicClientApplication,
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";

import { config } from "../Config";
import axios from "axios";
import { copyFileSync } from "fs";

interface LoginProps {
  isAuthenticated: boolean;
  authButtonMethod: any;
  user: any;
}

const Login: NextPage<LoginProps> = ({ authButtonMethod }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <LoginBody>
      <Image
        src={ilustracao_login}
        objectFit="fill"
        alt="Imagem de fundo da tela de login"
      />
      <LoginCard>
        <LoginCardTitle>Seja bem-vindo!</LoginCardTitle>
        <WelcomeUser />
        <LoginCardFormContainer>
          <LoginCardInputContainer>
            <LoginCardlabel>E-mail</LoginCardlabel>
            <LoginCardInput
              imagem={email_icon.src}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LoginCardInputContainer>
          <LoginCardInputContainer>
            <LoginCardlabel>Senha</LoginCardlabel>
            <LoginCardInput
              imagem={senha_icon.src}
              onChange={(e) => setSenha(e.target.value)}
            />
          </LoginCardInputContainer>
          <LoginCardButtonContainer>
            <LoginCardButton>Entrar</LoginCardButton>
            <LoginCardLinkCadastroP>
              Não possui conta?
              <LoginCardLinkCadastroSpan href="/cadastro" type="submit">
                Cadastre-se
              </LoginCardLinkCadastroSpan>
            </LoginCardLinkCadastroP>
          </LoginCardButtonContainer>
        </LoginCardFormContainer>
        <LoginCardDivider>
          <LoginCardDividerLine></LoginCardDividerLine>
          <LoginCardDividerP>ou</LoginCardDividerP>
          <LoginCardDividerLine></LoginCardDividerLine>
        </LoginCardDivider>
        <SignInButton />
        <ProtectedComponent />
        <SignOutButton />
      </LoginCard>
    </LoginBody>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
