import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = React.createContext({});

function AuthProvider({ children }: any) {
  const navigation = useNavigation();
  const [user, SetUser] = useState({});
  const [nome, setNome] = React.useState<string>();
  const [veremail, setEmail] = React.useState<string>();
  const [versenha, SetSenha] = React.useState<String>();

  function Register(nome: string, email: string, senha: string) {
    setNome(nome);
    setEmail(email);
    SetSenha(senha);
  }

  function singIn(email: string, senha: string) {
    if (email == veremail && senha == versenha) {
      navigation.navigate("Details");
    }
  }
  return (
    <AuthContext.Provider
      value={{
        nome: nome,
        email: veremail,
        senha: versenha,
        singIn,
        Register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
