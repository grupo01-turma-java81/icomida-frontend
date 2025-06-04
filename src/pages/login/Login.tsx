import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src="https://ik.imagekit.io/uhimtlk7c/logo1.png?updatedAt=1749045443520" //A ltere para o caminho correto do seu logo
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
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
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
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
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
          <span className="font-bold">iComida</span> criado pelo <span className="font-bold">Grupo 1</span>.
        </span>
      </footer>
    </div>
  );
};

export default Login;