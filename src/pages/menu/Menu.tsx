type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  img: string;
  saudavel: boolean;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Salada Caesar",
    categoria: "Salada",
    preco: 18,
    img: "https://ik.imagekit.io/uhimtlk7c/prato.png",
    saudavel: true,
  },
  {
    id: 2,
    nome: "Hambúrguer",
    categoria: "Lanche",
    preco: 18,
    img: "https://ik.imagekit.io/uhimtlk7c/prato.png",
    saudavel: false,
  },
  {
    id: 3,
    nome: "Bowl Vegano",
    categoria: "Vegano",
    preco: 18,
    img: "https://ik.imagekit.io/uhimtlk7c/prato.png",
    saudavel: true,
  },
  {
    id: 4,
    nome: "Pizza",
    categoria: "Italiana",
    preco: 18,
    img: "https://ik.imagekit.io/uhimtlk7c/prato.png",
    saudavel: false,
  },
  {
    id: 5,
    nome: "Wrap Integral",
    categoria: "Lanche",
    preco: 18,
    img: "https://ik.imagekit.io/uhimtlk7c/prato.png",
    saudavel: true,
  },
  {
    id: 6,
    nome: "Batata Frita",
    categoria: "Acompanhamento",
    preco: 18,
    img: "https://ik.imagekit.io/uhimtlk7c/prato.png",
    saudavel: false,
  },
];

function Menu() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-pink-200 to-white px-10 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center w-full md:w-auto">
          <span className="text-3xl font-bold text-pink-600 mr-10">iComida</span>
          <nav className="space-x-8 text-xl">
            <a href="/" className="hover:underline">Home</a>
            <a href="/menu" className="hover:underline">Menu</a>
            <a href="/categoria" className="hover:underline">Categoria</a>
            <a href="/login" className="hover:underline">Sair</a>
          </nav>
        </div>
        <div className="flex flex-col items-end mt-6 md:mt-0">
          <span className="text-right text-sm mb-2">
            Cadastre seu produto! Ele será disposto com os outros e fique à vontade para atualizá-lo se necessário
          </span>
          <button className="bg-pink-600 text-white px-10 py-2 rounded-full shadow-lg text-lg font-semibold hover:bg-pink-700 transition">
            Cadastrar
          </button>
        </div>
      </div>

      {/* Título */}
      <div className="flex items-center justify-start px-10 mt-6">
        <h1 className="text-5xl italic font-bold text-black" style={{ fontFamily: "cursive" }}>MENU</h1>
      </div>

      {/* Cards */}
      <div className="flex-1 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-72">
              <img src={produto.img} alt={produto.nome} className="w-48 h-48 object-cover rounded-lg mb-4" />
              <div className="flex items-center mb-2">
                {produto.saudavel && (
                  <img
                    src="https://ik.imagekit.io/uhimtlk7c/selo-verde.png"
                    alt="Selo Saudável"
                    className="w-8 h-8 mr-2"
                  />
                )}
                <span className="font-bold italic text-lg">{produto.nome}</span>
              </div>
              <span className="text-gray-600">{produto.categoria}</span>
              <span className="font-bold text-xl mt-2 mb-4">R$ {produto.preco}</span>
              <div className="flex w-full justify-between">
                <button className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700">Excluir</button>
                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Atualizar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-2 mt-10">
        <span>
          <span className="font-bold">iComida</span> criado pelo <span className="font-bold">Grupo 1</span>.
        </span>
      </footer>
    </div>
  );
}

export default Menu;