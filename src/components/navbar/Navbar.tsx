import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <header className="flex justify-between items-center p-6 bg-[#E83E28]  border-e-red-300">
        <div className="text-2xl font-bold text-black">iComida</div>
        <nav className="flex space-x-6">
          <Link to="/home" className="hover:underline font-semibold">
            Home
          </Link>
          <Link to="/menu" className="hover:underline font-semibold">
            Menu
          </Link>
          <Link to="/categoria" className="hover:underline font-semibold">
            Categoria
          </Link>
          <Link
            to="/"
            onClick={logout}
            className="hover:underline font-semibold"
          >
            Sair
          </Link>
        </nav>
      </header>
    );
  }

  return component;
}
export default Navbar;
