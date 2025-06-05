import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { cadastrarUsuario } from "../../services/Service";
import type Usuario from "../../models/Usuario";
import iconLogo from "../../assets/Icomidacadastrar (1) 1.svg";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const navegar = useNavigate();

  const [estaCarregando, setEstaCarregando] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

  function retornar() {
    navegar("/login");
  }

  useEffect(() => {
    if (usuario.id !== undefined) {
      retornar();
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setEstaCarregando(true);

      try {
        await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }

    setEstaCarregando(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      <div className="flex justify-between items-center px-8 py-4">
        <Link
          to="/"
          className="text-[#E85D04] font-bold text-xl hover:underline"
        >
          iComida
        </Link>
      </div>

      <div className="flex justify-center mb-6">
        <img
          src={iconLogo}
          alt="Icomidacadastrar (1) 1.svg"
          className="w-100 h-40"
        />
      </div>

      <div className="bg-white shadow-md rounded-xl mx-auto p-10 w-[90%] max-w-xl">
        <form className="flex flex-col gap-6" onSubmit={cadastrarNovoUsuario}>
          <div>
            <label
              htmlFor="nome"
              className="block text-gray-700 font-medium mb-1"
            >
              Nome *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              placeholder="Ex: Iago"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E85D04]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="usuario"
              className="block text-gray-700 font-medium mb-1"
            >
              Usuário *
            </label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              placeholder="Ex: iago@email.com"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E85D04]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-gray-700 font-medium mb-1"
            >
              Senha *
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              placeholder="Deve conter no mínimo 8 caracteres"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E85D04]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmarSenha"
              className="block text-gray-700 font-medium mb-1"
            >
              Confirmar Senha *
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
              placeholder="Deve conter no mínimo 8 caracteres"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E85D04]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="foto"
              className="block text-gray-700 font-medium mb-1"
            >
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              placeholder="Adicione o link da sua foto"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E85D04]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#E85D04] text-white rounded-xl font-bold hover:bg-[#D94F00] transition-colors"
          >
            PRONTO!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
