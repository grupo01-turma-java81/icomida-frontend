import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-[#FDAB9E]  border-e-red-300">
      <div className="text-2xl font-bold text-pink-600">iComida</div>
      <nav className="flex space-x-6">
        <a href="#home" className="hover:text-pink-600 font-semibold">
          Home
        </a>
       
        <a href="#menu" className="hover:text-pink-600 font-semibold">
          <Link to="/menu" className="hover:underline">Menu</Link>
        </a>
        <a href="#categoria" className="hover:text-pink-600 font-semibold">
          <Link to="/categoria" className="hover:underline">Categoria</Link>
        </a>
        <a href="#categoria" className="hover:text-pink-600 font-semibold">
          Perfil
        </a>
        <a href="#sair" className="hover:text-pink-600 font-semibold">
          Sair
        </a>
      </nav>
    </header>
  );
}

export default Navbar;