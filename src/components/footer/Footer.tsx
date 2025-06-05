import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const ano = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <footer className="flex justify-center bg-[#E83E28] border-red-300 p-6 text-center w-full bottom-0">
        <p className="text-black font-semibold">
          © {ano} iComida. Todos os direitos reservados.
        </p>
      </footer>
    );
  }

  return component;
}
export default Footer;
