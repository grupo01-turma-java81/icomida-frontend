import React from "react";
import Footer from "../../components/footer/Footer";

function Cadastro() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex justify-center items-center bg-white py-10">
        <div className="flex space-x-4">
          <img
            src="/path/to/icon1.png" // Substitua pelo caminho correto da imagem
            alt="Ícone 1"
            className="w-24 h-24"
          />
          <img
            src="/path/to/icon2.png" // Substitua pelo caminho correto da imagem
            alt="Ícone 2"
            className="w-24 h-24"
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg mx-auto p-8 max-w-lg">
        <form className="w-full space-y-6">
          <div>
            <label htmlFor="nome" className="block text-gray-700 font-semibold">
              Nome *
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Ex: Iago"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="usuario" className="block text-gray-700 font-semibold">
              Usuário *
            </label>
            <input
              type="email"
              id="usuario"
              placeholder="Ex: iago@email.com"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-gray-700 font-semibold">
              Senha *
            </label>
            <input
              type="password"
              id="senha"
              placeholder="Deve conter no mínimo 8 caracteres"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="confirmarSenha" className="block text-gray-700 font-semibold">
              Confirmar Senha *
            </label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Deve conter no mínimo 8 caracteres"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="foto" className="block text-gray-700 font-semibold">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              placeholder="Adicione sua Foto"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro;