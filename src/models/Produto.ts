import type Categoria from './Categoria';
import type Usuario from './Usuario';

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  produtoSaudavel: string;
  data?: string;
  categoria?: Categoria | null;
  usuario?: Usuario | null;
}