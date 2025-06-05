import { useState, useEffect, type FormEvent } from "react";
import { Check, X, Pencil, Trash2 } from "lucide-react";
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
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      buscar("/produto", setProdutos, {
        headers: { Authorization: token },
      });
      buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    }
  }, [token]);

  function handleAddProduto(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!nome || !preco || !categoriaId) return;

    const novoProduto = {
      nome,
      preco: Number(preco),
      produtoSaudavel,
      categoria: { id: Number(categoriaId) },
    };

    cadastrar("/produto", novoProduto, () => {}, {
      headers: { Authorization: token },
    })
      .then(() => {
        setNome("");
        setPreco("");
        setProdutoSaudavel("Não");
        setCategoriaId("");
        setShowForm(false);
        buscar("/produto", setProdutos, {
          headers: { Authorization: token },
        });
        alert("Produto cadastrado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar produto:", error);
        alert("Erro ao cadastrar produto.");
      });
  }

  function handleSaveEdit(id: number): void {
    if (!editNome || !editPreco || !editCategoriaId) return;

    const produtoAtualizado = {
      id,
      nome: editNome,
      preco: Number(editPreco),
      produtoSaudavel: editProdutoSaudavel,
      categoria: { id: Number(editCategoriaId) },
    };

    atualizar("/produto", produtoAtualizado, () => {}, {
      headers: { Authorization: token },
    })
      .then(() => {
        setEditandoId(null);
        buscar("/produto", setProdutos, {
          headers: { Authorization: token },
        });
        alert("Produto atualizado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao atualizar produto.");
      });
  }

  function handleEdit(prod: Produto): void {
    setEditandoId(prod.id);
    setEditNome(prod.nome);
    setEditPreco(prod.preco.toString());
    setEditProdutoSaudavel(prod.produtoSaudavel);
    setEditCategoriaId(prod.categoria.id);
  }

  function handleCancelEdit() {
    setEditandoId(null);
  }

  function handleDelete(id: number): void {
    if (!window.confirm("Tem certeza que deseja excluir este produto?")) return;

    deletar(`/produto/${id}`, {
      headers: { Authorization: token },
    })
      .then(() => {
        buscar("/produto", setProdutos, {
          headers: { Authorization: token },
        });
        alert("Produto excluído com sucesso!");
      })
      .catch(() => {
        alert("Erro ao excluir produto.");
      });
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <div className="w-full bg-[#e5e5e5] flex items-center justify-between px-16 py-10 mt-2 rounded-lg">
        <div className="flex flex-col gap-4 max-w-[400px]">
          <h1 className="text-6xl font-extrabold text-black drop-shadow-lg leading-tight">
            Menu <br /> <span className="ml-10">ONLINE</span>
          </h1>
          <p className="text-gray-700 text-base mt-2">
            Cadastre seu produto! Ele será disposto com os outros e fique à
            vontade para atualizá-lo se necessário
          </p>
          <button
            className="bg-[#ea3d26] text-white font-bold rounded-full px-7 py-3 text-lg shadow hover:bg-red-700 transition w-fit"
            onClick={() => setShowForm(!showForm)}
          >
            Novo produto &gt;
          </button>
        </div>
        <img
          src="https://ik.imagekit.io/snx9skhdm/imagem%20menu.png?updatedAt=1749129648749"
          alt="Banner"
          className="w-[800px] h-[460px] object-contain"
        />
      </div>

      {showForm && (
        <div className="flex justify-center mt-8">
          <div className="bg-white rounded-2xl p-8 w-[350px] shadow-lg border">
            <h2 className="text-2xl font-bold mb-6">Cadastrar Produto</h2>
            <form onSubmit={handleAddProduto} className="flex flex-col gap-4">
              <label className="font-semibold" htmlFor="nome">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mb-2"
                required
              />
              <label className="font-semibold" htmlFor="preco">
                Preço
              </label>
              <input
                id="preco"
                type="number"
                min="0.01"
                step="0.01"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mb-2"
                required
              />
              <label className="font-semibold" htmlFor="produtoSaudavel">
                Produto Saudável
              </label>
              <select
                id="produtoSaudavel"
                value={produtoSaudavel}
                onChange={(e) => setProdutoSaudavel(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mb-2"
              >
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
              </select>
              <label className="font-semibold" htmlFor="categoria">
                Categoria
              </label>
              <select
                id="categoria"
                value={categoriaId}
                onChange={(e) => setCategoriaId(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 mb-2"
                required
              >
                <option value="">Selecione...</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nome}
                  </option>
                ))}
              </select>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-[#ea3d26] text-white font-semibold rounded-md py-2 mt-2 hover:bg-red-700 transition flex-1"
                >
                  Cadastrar
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 font-semibold rounded-md py-2 mt-2 hover:bg-gray-400 transition flex-1"
                  onClick={() => setShowForm(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mt-12 mb-32">
        <h2 className="text-2xl font-bold mb-6">Produtos cadastrados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {produtos.map((prod) => (
            <div
              key={prod.id}
              className={`flex items-center justify-between border rounded-xl px-5 py-3 bg-white font-semibold text-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 ${
                editandoId === prod.id ? "ring-2 ring-blue-500" : ""
              }`}
              tabIndex={0}
            >
              {editandoId === prod.id ? (
                <div className="flex-1 flex flex-col gap-2 mr-4">
                  <input
                    className="border border-gray-300 rounded px-2 py-1"
                    value={editNome}
                    onChange={(e) => setEditNome(e.target.value)}
                    autoFocus
                  />
                  <input
                    className="border border-gray-300 rounded px-2 py-1"
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={editPreco}
                    onChange={(e) => setEditPreco(e.target.value)}
                  />
                  <select
                    value={editProdutoSaudavel}
                    onChange={(e) => setEditProdutoSaudavel(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="Não">Não</option>
                    <option value="Sim">Sim</option>
                  </select>
                  <select
                    value={editCategoriaId}
                    onChange={(e) => setEditCategoriaId(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1"
                    required
                  >
                    <option value="">Selecione...</option>
                    {categorias.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.nome}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="flex-1 flex flex-col">
                  <span className="flex items-center gap-2">
                    {prod.nome}
                    {prod.produtoSaudavel === "Sim" && (
                      <img
                        src="https://ik.imagekit.io/snx9skhdm/selo.png?updatedAt=1749132685971"
                        alt="Selo Saudável"
                        className="w-5 h-5 rounded-full bg-white"
                      />
                    )}
                  </span>
                  <span className="text-base font-normal text-gray-600">
                    R$ {Number(prod.preco).toFixed(2)}
                  </span>
                  <span className="text-base font-normal text-gray-600">
                    Categoria: {prod.categoria?.nome}
                  </span>
                  {prod.produtoSaudavel === "Sim" && (
                    <span
                      className="inline-flex items-center gap-1 mt-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold"
                      style={{ width: "fit-content" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="12" fill="#22c55e" />
                        <path
                          d="M8 12.5l2.5 2.5L16 9"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
  );
}

export default Menu;
