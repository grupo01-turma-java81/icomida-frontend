import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pencil, Trash2, Check, X } from "lucide-react";
import { buscar, cadastrar, atualizar, deletar } from "../../services/Service";

type Categoria = { id: number; nome: string };

function Categoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [novaCategoria, setNovaCategoria] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [editNome, setEditNome] = useState("");
  const navigate = useNavigate();

  // Recupera o token do localStorage
  const token = localStorage.getItem("token");

  // Redireciona para login se não estiver autenticado
  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado para acessar esta página.");
      navigate("/login");
    }
  }, [token, navigate]);

  // Buscar categorias ao carregar a página
  useEffect(() => {
    if (token) {
      buscar("/categorias", setCategorias, {
        headers: { Authorization: token }
      });
    }
  }, [token]);

  // Cadastrar nova categoria
  async function handleAddCategoria(e: React.FormEvent) {
    e.preventDefault();
    if (novaCategoria.trim() === "") return;
    try {
      await cadastrar(
        "/categorias",
        { nome: novaCategoria },
        () => { },
        { headers: { Authorization: token } }
      );
      buscar("/categorias", setCategorias, { headers: { Authorization: token } });
      setNovaCategoria("");
    } catch {
      alert("Erro ao cadastrar categoria.");
    }
  }

  // Deletar categoria
  async function handleDelete(id: number) {
    try {
      await deletar(`/categorias/${id}`, { headers: { Authorization: token } });
      buscar("/categorias", setCategorias, { headers: { Authorization: token } });
    } catch {
      alert("Erro ao deletar categoria.");
    }
  }

  // Iniciar edição
  function handleEdit(id: number, nome: string) {
    setEditandoId(id);
    setEditNome(nome);
  }

  
  function handleCancelEdit() {
    setEditandoId(null);
    setEditNome("");
  }

  
  async function handleSaveEdit(id: number) {
    try {
      await atualizar(
        "/categorias",
        { id, nome: editNome },
        () => { },
        { headers: { Authorization: token } }
      );
      buscar("/categorias", setCategorias, { headers: { Authorization: token } });
      setEditandoId(null);
      setEditNome("");
    } catch {
      alert("Erro ao atualizar categoria.");
    }
  }

  return (
    <div className="min-h-screen bg-[# bg-[#ea3d26] flex flex-col">
    
      <div className="flex justify-between items-center px-12 py-6 bg-[#eaeaea] rounded-4xl mx-8 mt-6">
        <span className="text-3xl font-bold   text-[#ea3d26]">iComida</span>
        <nav className="space-x-8 text-xl flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/categoria" className="hover:underline text-black">Categoria</Link>
          <Link to="/login" className="hover:underline">Sair</Link>
        </nav>
      </div>
      
      <div className="flex flex-1 justify-center items-center gap-16 mt-10">
       
        <div className="bg-[#f7f7f7] rounded-[2.5rem] p-10 w-[340px] flex flex-col shadow">
          <h2 className="text-2xl font-bold mb-6">Nova Categoria</h2>
          <form onSubmit={handleAddCategoria} className="flex flex-col gap-4">
            <label htmlFor="novaCategoria" className="font-semibold">Nome</label>
            <input
              id="novaCategoria"
              type="text"
              value={novaCategoria}
              onChange={e => setNovaCategoria(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <button
              type="submit"
              className="bg-[#ea3d26] text-white font-semibold rounded-md py-2 mt-2 hover:bg-red-700 transition"
            >
              Cadastrar Categoria
            </button>
          </form>
        </div>
        
        <div className="bg-[#f7f7f7] rounded-[2.5rem] p-10 w-[440px] flex flex-col shadow">
          <h2 className="text-2xl font-bold mb-6">Categorias existentes</h2>
          <div
            className="flex flex-col gap-5 overflow-y-auto"
            style={{ maxHeight: "350px" }} 
          >
            {categorias.map(cat => (
              <div
                key={cat.id}
                className={`flex items-center justify-between border rounded-xl px-5 py-3 bg-white font-semibold text-lg focus-within:ring-2 focus-within:ring-blue-500 ${editandoId === cat.id ? "ring-2 ring-blue-500" : ""
                  }`}
                tabIndex={0}
              >
                {editandoId === cat.id ? (
                  <input
                    className="border border-gray-300 rounded px-2 py-1 flex-1 mr-4"
                    value={editNome}
                    onChange={e => setEditNome(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <span>{cat.nome}</span>
                )}
                <div className="flex gap-3">
                  {editandoId === cat.id ? (
                    <>
                      <button
                        className="p-2 rounded-full hover:bg-green-100 transition"
                        title="Salvar"
                        onClick={() => handleSaveEdit(cat.id)}
                      >
                        <Check className="w-5 h-5 text-green-600" />
                      </button>
                      <button
                        className="p-2 rounded-full hover:bg-gray-200 transition"
                        title="Cancelar"
                        onClick={handleCancelEdit}
                      >
                        <X className="w-5 h-5 text-gray-600" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="p-2 rounded-full hover:bg-gray-200 transition"
                        title="Editar"
                        onClick={() => handleEdit(cat.id, cat.nome)}
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 rounded-full hover:bg-gray-200 transition"
                        title="Excluir"
                        onClick={() => handleDelete(cat.id)}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categoria;