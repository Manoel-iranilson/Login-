import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AuthContext } from "../../contexts/auth";
import { LinearGradient } from "expo-linear-gradient";
import { Container, Dados, Title } from "./styles";

const Details: React.FC = () => {
  const { nome, email, senha }: any = useContext(AuthContext);
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#000000", "#363636", "#363636"]}
    >
      <Container>
        <Title>Dados do usuario:</Title>

        <Dados>Nome: {nome}</Dados>
        <Dados>Email: {email}</Dados>
        <Dados>Senha: {senha}</Dados>
      </Container>
    </LinearGradient>
  );
};

export default Details;
