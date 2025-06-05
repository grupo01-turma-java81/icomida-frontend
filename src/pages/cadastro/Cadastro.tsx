import React, { useState, type ChangeEvent,type FormEvent } from "react";
import Footer from "../../components/footer/Footer";
import { cadastrarUsuario } from "../../services/Service";
import type Usuario from "../../models/Usuario";

function Cadastro() {
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: ""
  });

  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (usuario.senha.length < 8) {
    alert("A senha deve conter no mínimo 8 caracteres.");
    return;
  }
  if (usuario.senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }
  try {
    // Crie um objeto sem o campo id
    const { id, ...usuarioSemId } = usuario;
    await cadastrarUsuario("/usuarios/cadastrar", usuarioSemId, setUsuario);
    alert("Usuário cadastrado com sucesso!");
    // Redirecione ou limpe o formulário se desejar
  } catch (error) {
    alert("Erro ao cadastrar. Tente novamente.");
  }
}

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex justify-center items-center bg-white py-10">
        <img
          src="https://ik.imagekit.io/uhimtlk7c/Icomida:cadastrar.png?updatedAt=1749044853904"
          alt="Ícone 1"
          className="w-24 h-24"
        />
      </div>
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg mx-auto p-8 max-w-4xl w-full">
        <form className="w-full flex flex-col md:flex-row gap-8" onSubmit={onSubmit}>
          {/* Coluna 1 */}
          <div className="flex-1 space-y-6">
            <div>
              <label htmlFor="nome" className="block text-gray-700 font-semibold">
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={usuario.nome}
                onChange={atualizarEstado}
                placeholder="Ex: Iago"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="usuario" className="block text-gray-700 font-semibold">
                Usuário *
              </label>
              <input
                type="email"
                id="usuario"
                name="usuario"
                value={usuario.usuario}
                onChange={atualizarEstado}
                placeholder="Ex: iago@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-gray-700 font-semibold">
                Senha *
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={usuario.senha}
                onChange={atualizarEstado}
                placeholder="Deve conter no mínimo 8 caracteres"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          {/* Coluna 2 */}
          <div className="flex-1 space-y-6">
            <div>
              <label htmlFor="confirmarSenha" className="block text-gray-700 font-semibold">
                Confirmar Senha *
              </label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                value={confirmarSenha}
                onChange={confirmarSenhaHandle}
                placeholder="Deve conter no mínimo 8 caracteres"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="foto" className="block text-gray-700 font-semibold">
                Foto
              </label>
              <input
                type="text"
                id="foto"
                name="foto"
                value={usuario.foto}
                onChange={atualizarEstado}
                placeholder="Adicione o link da sua foto"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-between mt-8">
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
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro;