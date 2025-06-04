import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-red-300 border-b-2 border-e-red-300">
      <div className="text-2xl font-bold text-pink-600">iComida</div>
      <nav className="flex space-x-6">
        <a href="#home" className="hover:text-pink-600 font-semibold">
          Home
        </a>
        <a href="#destaques" className="hover:text-pink-600 font-semibold">
          Destaques
        </a>
        <a href="#menu" className="hover:text-pink-600 font-semibold">
          Menu
        </a>
        <a href="#categoria" className="hover:text-pink-600 font-semibold">
          Categoria
        </a>
        <a href="#sair" className="hover:text-pink-600 font-semibold">
          Sair
        </a>
      </nav>
    </header>
  );
}

export default Navbar;