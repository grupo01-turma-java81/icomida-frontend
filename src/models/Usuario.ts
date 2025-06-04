import type Menu from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  menu?: Menu[] | null;
}