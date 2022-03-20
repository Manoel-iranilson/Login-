import React, { useState, useContext, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { Container, Btn, TxtInput, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import { LinearGradient } from "expo-linear-gradient";

export interface Singin {
  email: string;
  passoword: string;
}

const Home: React.FC = () => {
  const { singIn }: any = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = React.useState<string>();
  const [passoword, setPassoword] = React.useState<string>();

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

  //animação
  function entrar() {
    singIn(email, passoword);
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#000000", "#363636", "#363636"]}
    >
      <Container>
        <Animated.View style={{ opacity: opacity }}>
          <Logo source={require("../../Imagens/Logo.png")} />
        </Animated.View>
        <Animated.View
          style={[
            { alignItems: "center" },
            { transform: [{ translateY: offset.y }] },
          ]}
        >
          <TxtInput>
            <TextInput
              style={{ width: 250, padding: 10, color: "white" }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="white"
            />
          </TxtInput>
          <TxtInput>
            <TextInput
              style={{ width: 250, padding: 10, color: "white" }}
              value={passoword}
              onChangeText={(text) => setPassoword(text)}
              placeholder="Senha"
              placeholderTextColor="white"
            />
          </TxtInput>

          <TouchableOpacity onPress={() => entrar()}>
            <Btn>
              <Text style={{ color: "white", fontSize: 20 }}>Entrar</Text>
            </Btn>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <View>
              <Text style={{ color: "white" }}>Registra-se</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Container>
    </LinearGradient>
  );
};

export default Home;
