import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pencil, Trash2, Check, X } from "lucide-react";
import { buscar, cadastrar, atualizar, deletar } from "../../services/Service";

type Categoria = {
  id: number;
  nome: string;
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  produtoSaudavel: string;
  categoria: Categoria;
};

function Menu() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [produtoSaudavel, setProdutoSaudavel] = useState("Não");
  const [categoriaId, setCategoriaId] = useState<number | "">("");
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [editNome, setEditNome] = useState("");
  const [editPreco, setEditPreco] = useState("");
  const [editProdutoSaudavel, setEditProdutoSaudavel] = useState("Não");
  const [editCategoriaId, setEditCategoriaId] = useState<number | "">("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado para acessar esta página.");
      navigate("/login");
    }
  }, [token, navigate]);

  // Buscar produtos e categorias
  useEffect(() => {
    if (token) {
      buscar("/produto", setProdutos, {
        headers: { Authorization: token }
      });
      buscar("/categorias", setCategorias, {
        headers: { Authorization: token }
      });
    }
  }, [token]);

  // Cadastrar novo produto
  async function handleAddProduto(e: React.FormEvent) {
    e.preventDefault();
    if (nome.trim() === "" || preco.trim() === "" || categoriaId === "") return;
    try {
      await cadastrar(
        "/produto",
        {
          nome,
          preco: parseFloat(preco),
          produtoSaudavel,
          categoria: { id: categoriaId }
        },
        () => {},
        { headers: { Authorization: token } }
      );
      buscar("/produto", setProdutos, { headers: { Authorization: token } });
      setNome("");
      setPreco("");
      setProdutoSaudavel("Não");
      setCategoriaId("");
    } catch {
      alert("Erro ao cadastrar produto.");
    }
  }

  // Deletar produto
  async function handleDelete(id: number) {
    try {
      await deletar(`/produto/${id}`, { headers: { Authorization: token } });
      buscar("/produto", setProdutos, { headers: { Authorization: token } });
    } catch {
      alert("Erro ao deletar produto.");
    }
  }

  // Iniciar edição
  function handleEdit(prod: Produto) {
    setEditandoId(prod.id);
    setEditNome(prod.nome);
    setEditPreco(prod.preco.toString());
    setEditProdutoSaudavel(prod.produtoSaudavel);
    setEditCategoriaId(prod.categoria?.id ?? "");
  }

  // Cancelar edição
  function handleCancelEdit() {
    setEditandoId(null);
    setEditNome("");
    setEditPreco("");
    setEditProdutoSaudavel("Não");
    setEditCategoriaId("");
  }

  // Salvar edição
  async function handleSaveEdit(id: number) {
    try {
      await atualizar(
        "/produto",
        {
          id,
          nome: editNome,
          preco: parseFloat(editPreco),
          produtoSaudavel: editProdutoSaudavel,
          categoria: { id: editCategoriaId }
        },
        () => {},
        { headers: { Authorization: token } }
      );
      buscar("/produto", setProdutos, { headers: { Authorization: token } });
      setEditandoId(null);
      setEditNome("");
      setEditPreco("");
      setEditProdutoSaudavel("Não");
      setEditCategoriaId("");
    } catch {
      alert("Erro ao atualizar produto.");
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-12 py-6 bg-white">
        <span className="text-3xl font-bold text-[#ea3d26]">iComida</span>
        <nav className="space-x-8 text-xl flex items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/menu" className="hover:underline text-black">Menu</Link>
          <Link to="/categoria" className="hover:underline">Categoria</Link>
          <Link to="/login" className="hover:underline">Sair</Link>
        </nav>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-1 justify-center items-center gap-16 mt-10">
        {/* Formulário Novo Produto */}
        <div className="bg-[#f7f7f7] rounded-[2.5rem] p-10 w-[340px] flex flex-col shadow">
          <h2 className="text-2xl font-bold mb-6">Novo Produto</h2>
          <form onSubmit={handleAddProduto} className="flex flex-col gap-4">
            <label className="font-semibold" htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              required
            />
            <label className="font-semibold" htmlFor="preco">Preço</label>
            <input
              id="preco"
              type="number"
              min="0.01"
              step="0.01"
              value={preco}
              onChange={e => setPreco(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              required
            />
            <label className="font-semibold" htmlFor="produtoSaudavel">Produto Saudável</label>
            <select
              id="produtoSaudavel"
              value={produtoSaudavel}
              onChange={e => setProdutoSaudavel(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
            >
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
            <label className="font-semibold" htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              value={categoriaId}
              onChange={e => setCategoriaId(Number(e.target.value))}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              required
            >
              <option value="">Selecione...</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nome}</option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-[#ea3d26] text-white font-semibold rounded-md py-2 mt-2 hover:bg-red-700 transition"
            >
              Cadastrar Produto
            </button>
          </form>
        </div>
        {/* Lista de Produtos */}
        <div className="bg-[#f7f7f7] rounded-[2.5rem] p-10 w-[440px] flex flex-col shadow">
          <h2 className="text-2xl font-bold mb-6">Produtos cadastrados</h2>
          <div
            className="flex flex-col gap-5 overflow-y-auto"
            style={{ maxHeight: "350px" }}
          >
            {produtos.map(prod => (
              <div
                key={prod.id}
                className={`flex items-center justify-between border rounded-xl px-5 py-3 bg-white font-semibold text-lg focus-within:ring-2 focus-within:ring-blue-500 ${
                  editandoId === prod.id ? "ring-2 ring-blue-500" : ""
                }`}
                tabIndex={0}
              >
                {editandoId === prod.id ? (
                  <div className="flex-1 flex flex-col gap-2 mr-4">
                    <input
                      className="border border-gray-300 rounded px-2 py-1"
                      value={editNome}
                      onChange={e => setEditNome(e.target.value)}
                      autoFocus
                    />
                    <input
                      className="border border-gray-300 rounded px-2 py-1"
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={editPreco}
                      onChange={e => setEditPreco(e.target.value)}
                    />
                    <select
                      value={editProdutoSaudavel}
                      onChange={e => setEditProdutoSaudavel(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="Não">Não</option>
                      <option value="Sim">Sim</option>
                    </select>
                    <select
                      value={editCategoriaId}
                      onChange={e => setEditCategoriaId(Number(e.target.value))}
                      className="border border-gray-300 rounded px-2 py-1"
                      required
                    >
                      <option value="">Selecione...</option>
                      {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.nome}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <span>{prod.nome}</span>
                    <span className="text-base font-normal text-gray-600">R$ {Number(prod.preco).toFixed(2)}</span>
                    <span className="text-base font-normal text-gray-600">Categoria: {prod.categoria?.nome}</span>
                    {prod.produtoSaudavel === "Sim" && (
                      <span className="inline-flex items-center gap-1 mt-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Saudável
                      </span>
                    )}
                  </div>
                )}
                <div className="flex gap-3 ml-4">
                  {editandoId === prod.id ? (
                    <>
                      <button
                        className="p-2 rounded-full hover:bg-green-100 transition"
                        title="Salvar"
                        onClick={() => handleSaveEdit(prod.id)}
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
                        onClick={() => handleEdit(prod)}
                      >
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 rounded-full hover:bg-gray-200 transition"
                        title="Excluir"
                        onClick={() => handleDelete(prod.id)}
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
      {/* Footer */}
      <footer className="bg-[#ea3d26] text-white text-center py-4 mt-10 border-t border-[#eaeaea]">
        <span>
          <a href="/" className="underline text-white hover:text-blue-200">iComida</a> criado pelo <span className="font-bold underline text-white hover:text-blue-200">Grupo 1</span>.
        </span>
      </footer>
    </div>
  );
}

export default Menu;