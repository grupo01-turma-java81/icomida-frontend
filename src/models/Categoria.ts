import type Menu from "./Produto";

export default interface Categoria {
    id: number;
    descricao: string;
    Menu?: Menu[] | null;
}