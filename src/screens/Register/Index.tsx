import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";

import { Container, Logo, TxtInput, Btn, Title } from "./styles";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Register: React.FC = () => {
  const navigation = useNavigation();
  const { Register }: any = useContext(AuthContext);
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [passoword, setPassoword] = React.useState<string>();

  function send() {
    Register(name, email, passoword);
    navigation.navigate("Home");
  }

  //animação
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 25,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 2,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  });

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#000000", "#363636", "#363636"]}
    >
      <Container>
        <Animated.View style={{ opacity: opacity }}>
          <Logo source={require("../../Imagens/Logo.png")} />
        </Animated.View>
        <View>
          <Title>Registrar-se</Title>
        </View>
        <Animated.View
          style={[
            { alignItems: "center" },
            { transform: [{ translateY: offset.y }] },
          ]}
        ></Animated.View>
        <TxtInput>
          <TextInput
            placeholder="Digite seu Nome"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ width: 250, padding: 10, color: "white" }}
            placeholderTextColor="white"
          />
        </TxtInput>
        <TxtInput>
          <TextInput
            placeholder="Digite seu Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ width: 250, padding: 10, color: "white" }}
            placeholderTextColor="white"
          />
        </TxtInput>
        <TxtInput>
          <TextInput
            placeholder="Digite sua senha"
            value={passoword}
            onChangeText={(text) => setPassoword(text)}
            style={{ width: 250, padding: 10, color: "white" }}
            placeholderTextColor="white"
          />
        </TxtInput>
        <TouchableOpacity onPress={() => send()}>
          <Btn>
            <Text>Registrar</Text>
          </Btn>
        </TouchableOpacity>
      </Container>
    </LinearGradient>
  );
};

export default Register;
