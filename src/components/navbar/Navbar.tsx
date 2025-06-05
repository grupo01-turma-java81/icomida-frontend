import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-[#E83E28]  border-e-red-300">
      <div className="text-2xl font-bold text-black">iComida</div>
      <nav className="flex space-x-6">
        <Link to="/home" className="hover:underline font-semibold">Home</Link>
        <Link to="/menu" className="hover:underline font-semibold">Menu</Link>
        <Link to="/categoria" className="hover:underline font-semibold">Categoria</Link>
        <Link to="" className="hover:underline font-semibold">Perfil</Link>
        <Link to="" className="hover:underline font-semibold">Sair</Link>
      </nav>
    </header>
  );
}
export default Navbar;