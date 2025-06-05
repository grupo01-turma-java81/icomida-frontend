import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import type UsuarioLogin from "../../models/UsuarioLogin";

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
          // Salve o token/localStorage se desejar
          localStorage.setItem("token", resp.token);
          navigate("/"); // Redireciona para a home ou dashboard
        } else {
          alert("Usuário ou senha inválidos!");
        }
      });
    } catch {
      alert("Erro ao tentar logar. Verifique usuário e senha.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src="https://ik.imagekit.io/uhimtlk7c/logo1.png?updatedAt=1749045443520"
          alt="icomida logo"
          className="w-48 h-48 mb-8"
        />
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md px-8 py-8 w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="usuario">
              Usuário *
            </label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="senha">
              Senha *
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition-colors"
          >
            Conecte-se
          </button>
        </form>
        <div className="mt-6">
          <Link to="/cadastro" className="text-pink-600 hover:underline">
            Não tem uma conta?
          </Link>
        </div>
      </div>
      <footer className="bg-pink-600 text-white text-center py-2">
        <span>
          <span className="font-bold">iComida</span> criado pelo <span className="font-bold">Coda Nervoso</span>.
        </span>
      </footer>
    </div>
  );
};

export default Login;