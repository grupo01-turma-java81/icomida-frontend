import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import type UsuarioLogin from "../../models/UsuarioLogin";
import iconLogo from "../../assets/icon_logo.svg"

const Login: React.FC = () => {
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  });

  const navigate = useNavigate();

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login("/usuarios/logar", usuarioLogin, (resp: UsuarioLogin) => {
        setUsuarioLogin(resp);
        if (resp.token !== "") {
          localStorage.setItem("token", resp.token);
          navigate("/");
        } else {
          alert("Usuário ou senha inválidos!");
        }
      });
    } catch {
      alert("Erro ao tentar logar. Verifique usuário e senha.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center px-8 pt-4">
      <Link to="/" className="text-[#E85D04] font-bold text-xl hover:underline">
  iComida
</Link>      
    </div>

      <div className="flex flex-col items-center mt-4">
        <img
          src={iconLogo}
          alt="icomida logo"
          className="w-100 h-40 mb-2"
        />
      </div>

      <div className="flex justify-center mt-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded shadow-md w-full max-w-xl"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="usuario">
              Usuário *
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
              placeholder="ex: login@email.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="senha">
              Senha *
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
              placeholder="Digite entre 8 e 16 caracteres"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E85D04] text-white font-bold py-2 rounded hover:bg-[#D94F00] transition-colors"
          >
            ENTRE!
          </button>

          <div className="text-center mt-6">
            <span className="text-sm text-gray-600 mr-1">Não tem uma conta?</span>
            <Link to="/cadastro" className="text-[#E85D04] font-semibold hover:underline">
              Criar agora
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
