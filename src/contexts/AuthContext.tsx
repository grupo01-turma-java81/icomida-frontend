import { createContext, useState, type ReactNode } from "react";
import { login } from "../services/Service";
import type UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      alert("Usuário foi autenticado com sucesso!");
    } catch (error) {
      alert("Os dados do Usuário estão inconsistentes!");
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
