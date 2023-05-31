"use client";
import { FC } from "react";
import { graphql } from "@/gql";
import { useMutation } from "@apollo/client";
import LoginForm from "./LoginForm";
import {
  redirectToClientCallbackUrl,
  useSetClientCallbackUrl,
} from "@/helpers/storeClientCallbackUrl";
import "./login.scss";
import BubblesBackground from "@/components/BubblesBackground";
import spottedZebraLogo from "@/assets/logos/SpottedZebraLogo.svg";
import Image from "next/image";

const AuthenticateDocument = graphql(/* GraphQL */ `
  mutation Authenticate(
    $email: String!
    $password: String!
    $clientType: ClientType
    $mfaCookie: [String!]
  ) {
    authenticate(
      email: $email
      password: $password
      mfaCookie: $mfaCookie
      clientType: $clientType
    ) {
      accessToken
      refreshToken
    }
  }
`);

const Login: FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = ({ searchParams }) => {
  useSetClientCallbackUrl(searchParams);
  const [authenticate] = useMutation(AuthenticateDocument);

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await authenticate({
        variables: {
          email,
          password,
        },
      });

      if (res.data?.authenticate) {
        redirectToClientCallbackUrl(
          res.data.authenticate.accessToken,
          res.data.authenticate.refreshToken
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login__top">
        <Image src={spottedZebraLogo} alt="" className="login__logo" />
        <div className="login__title-wrapper">
          <BubblesBackground>
            <h1 className="login__title">Welcome</h1>
          </BubblesBackground>
        </div>
      </div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
