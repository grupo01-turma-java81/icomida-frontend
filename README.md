# 🍽️ iComida

![icomida landing-page](https://i.postimg.cc/c4ztBDtc/ladingpage.png)

**iComida** é um sistema de gerenciamento de produtos e categorias com foco em delivery de refeições. A aplicação foi desenvolvida com React + TypeScript no frontend, utilizando autenticação com JWT e integração com um backend Java Spring Boot.

#### 💡 Descrição

O projeto tem como objetivo permitir que usuários autenticados visualizem, cadastrem, editem e excluam **produtos (menu)** e **categorias**, promovendo uma experiência moderna e fluida para gerenciamento de um cardápio digital. O foco está em refeições saudáveis, diversidade de pratos e interface amigável.


| Página de Cadastro                | Página Inicial                     | Página de Cardápio                 | Página de Categoria de Comida        |
|----------------------------------|------------------------------------|------------------------------------|---------------------------------------|
| ![Cadastro](https://i.postimg.cc/qqFFF3Hn/cadastro-icomida.png)     | ![Home](https://i.postimg.cc/NMpS1nNd/home-icomida.png)           | ![Cardápio](https://i.postimg.cc/kgb0kf45/menu-icomida.png)       | ![Categoria](https://i.postimg.cc/3Jd5ZKQm/cat-icomida.png)         |


## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/): Biblioteca para criação de interfaces de usuário.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript com tipagem estática.
- [React Router DOM](https://reactrouter.com/): Biblioteca para roteamento de páginas no React.
- [Tailwind CSS](https://tailwindcss.com/): Framework de classes utilitárias para estilização.
- [Axios](https://axios-http.com/): Cliente HTTP para requisições assíncronas.
- [Phosphor Icons](https://phosphoricons.com/): Biblioteca de ícones personalizáveis e responsivos.
- [Vite](https://vitejs.dev/): Ferramenta de build rápida e moderna.
- [Java Spring Boot (Backend)](https://spring.io/projects/spring-boot): Framework para criação de APIs em Java.

## 🧠 Funcionalidades

✔️ Cadastro e login de usuários </br>
✔️ Autenticação com JWT </br>
✔️ Exibição de página inicial e landing page </br>
✔️ Cadastro, edição e exclusão de **Produtos** </br>
✔️ Cadastro, edição e exclusão de **Categorias** </br>
✔️ Layout responsivo e estilização com Tailwind CSS </br>
✔️ Navegação entre páginas com React Router </br>
✔️ Logout e validação de token </br>
✔️ Imagens e avatares personalizados por link </br> </br>
✔️ Sinalização visual destacando produtos saudáveis no cardápio </br>
![Comidas saudáveis](https://i.postimg.cc/rwTpZ0V7/cardapio.gif)

#### 🔐 **Autenticação**

A autenticação é feita via JWT. O token é armazenado no contexto global (`AuthContext`) após o login bem-sucedido. O contexto gerencia o estado de autenticação e redireciona o usuário para a rota `/home` ao logar.

#### 🔗 Sobre o Backend
> ✅ O backend da aplicação **iComida** já está implementado e funcional. </br>
> 📂 Para visualizar o código-fonte completo, consumir a API ou contribuir com melhorias, acesse o repositório clicando neste [link](https://github.com/grupo01-turma-java81/icomida).


## 🛠️ Estrutura de Pastas

```bash
src/
├── assets/                # Imagens e SVGs
├── components/            # Componentes reutilizáveis (Navbar, Footer, Categoria, Menu)
├── contexts/              # Context API para autenticação
├── models/                # Interfaces TypeScript (Produto, Categoria, Usuario)
├── pages/                 # Páginas principais (Home, Login, Cadastro, LandingPage)
├── services/              # Integração com API usando axios
├── App.tsx                # Definição de rotas principais
└── main.tsx               # Ponto de entrada
```

## 📦 Modelos (Interfaces)

* **Produto**
```ts
interface Produto {
  id: number;
  nome: string;
  preco: number;
  produtoSaudavel: string;
  data?: string;
  categoria?: Categoria | null;
  usuario?: Usuario | null;
}
```
</br>

* **Categoria**
```ts
interface Produto {
  id: number;
  nome: string;
  preco: number;
  produtoSaudavel: string;
  data?: string;
  categoria?: Categoria | null;
  usuario?: Usuario | null;
}
```

</br>

* **UsuarioLogin**
```ts
interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  token: string;
}
```

## 🔄 Rotas (Frontend)

| Rota         | Componente  | Descrição                     |
| ------------ | ----------- | ----------------------------- |
| `/`          | LandingPage | Tela inicial com apresentação |
| `/login`     | Login       | Tela de login de usuário      |
| `/cadastro`  | Cadastro    | Formulário de registro        |
| `/home`      | Home        | Página de boas-vindas         |
| `/menu`      | Menu        | Lista de produtos             |
| `/categoria` | Categoria   | Lista de categorias           |

## 🧪 Como rodar localmente
1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/icomida-frontend.git
cd icomida-frontend
```

2. **Instale as dependências**

```bash
yarn
```

3. **Instale as dependências**
Certifique-se de que o backend está rodando na porta `http://localhost:8080`.

4. **Execute o frontend**

```bash
yarn dev
```

5. Acesse `http://localhost:5173` no navegador.

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Você pode colaborar com sugestões, feedbacks ou melhorias no código. Sinta-se à vontade para abrir issues ou enviar pull requests.

> 💙 Este projeto foi desenvolvido de forma colaborativa por um grupo comprometido com o aprendizado e a prática de desenvolvimento.

👤 **Colaboradores do Projeto**
<table> <tr> <td align="center"> <a href="https://github.com/ViniCristhian"> <img src="https://github.com/ViniCristhian.png" width="100px;" alt="Vinícius Cristhian"/> <br /> <sub><b>Vinícius Cristhian</b></sub> </a><br /> <a href="https://www.linkedin.com/in/vinicristhian/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/IagoWiliian"> <img src="https://github.com/IagoWiliian.png" width="100px;" alt="Iago Willian"/> <br /> <sub><b>Iago Willian</b></sub> </a><br /> <a href="https://www.linkedin.com/in/iago-willian-/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/GiulioArantes"> <img src="https://github.com/GiulioArantes.png" width="100px;" alt="Giulio Gabriel"/> <br /> <sub><b>Giulio Gabriel</b></sub> </a><br /> <a href="https://www.linkedin.com/in/giulio-arantes/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/Yasmimruescas"> <img src="https://github.com/Yasmimruescas.png" width="100px;" alt="Yasmim Ruescas"/> <br /> <sub><b>Yasmim Ruescas</b></sub> </a><br /> <a href="https://www.linkedin.com/in/yasmim-ruescas/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/Vitoriacmlly"> <img src="https://github.com/Vitoriacmlly.png" width="100px;" alt="Vitoria Camilly"/> <br /> <sub><b>Vitoria Camilly</b></sub> </a><br /> <a href="https://www.linkedin.com/in/vitoria-camilly/">🔗 LinkedIn</a> </td> <td align="center"> <a href="https://github.com/BrunoDaniel13"> <img src="https://github.com/BrunoDaniel13.png" width="100px;" alt="Bruno Daniel"/> <br /> <sub><b>Bruno Daniel</b></sub> </a><br /> <a href="https://www.linkedin.com/in/bruno-daniel-ferreira-leite/">🔗 LinkedIn</a> </td> </tr> </table>
