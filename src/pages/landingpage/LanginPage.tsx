import { Link } from "react-router-dom";
import {
  GithubLogo,
  LinkedinLogo,
  UsersThree,
  Wrench,
} from "@phosphor-icons/react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-[#8B2323]">
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center text-center">
          <div className="max-w-2xl mt-8">
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Bem-vindo ao mundo do iComida!
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Encontre desde os pratos mais saborosos aos mais saudáveis, você
              que manda! Temos uma diversidade que irá surpreendê-lo
            </p>
          </div>
          <div className="relative">
            <img
              src="https://i.postimg.cc/N0GM4yP4/Login-3-1.png"
              alt="Chef Mascot"
              className="w-7xl h-auto relative"
            />
            <Link
              to="/login"
              className="inline-block bg-black text-white text-[20px] px-20 py-3 rounded-2xl font-medium hover:bg-[#8B2323]/80 transition-all transform hover:scale-105 shadow-xl"
            >
              ENTRE!
            </Link>
          </div>
        </div>
      </section>

      <div className="mb-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 opacity-70"></div>
          <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 opacity-40"></div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-8 text-center transform hover:scale-105 transition-all hover:bg-[#8B2323]/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Comida Saudavel
            </h3>
            <div className="flex justify-center mb-6">
              <div className="bg-green-600 rounded-full p-6 shadow-lg">
                <img
                  src="https://i.postimg.cc/V6dXKZHD/Design-sem-nome-20.png"
                  alt="Comida Saudável"
                  className="w-24 h-24"
                />
              </div>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Nosso foco é te conectar com refeições realmente saudáveis, de
              verdade — nada de pegadinha. Você escolhe o que quer (tem opções
              low carb, vegano) e a gente mostra só o que combina com você
            </p>
          </div>

          <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-8 text-center transform hover:scale-105 transition-all hover:bg-[#8B2323]/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Parceiros Confiáveis
            </h3>
            <div className="flex justify-center mb-6">
              <div className="bg-red-500 rounded-full p-6 shadow-lg">
                <UsersThree size={96} weight="fill" className="text-white" />
              </div>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Trabalhamos só com quem leva a comida a sério: qualidade, higiene
              e sabor são prioridade
            </p>
          </div>

          <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-8 text-center transform hover:scale-105 transition-all hover:bg-[#8B2323]/50">
            <h3 className="text-2xl font-bold text-white mb-6">Suporte</h3>
            <div className="flex justify-center mb-6">
              <div className="bg-red-500 rounded-full p-6 shadow-lg">
                <Wrench size={96} weight="fill" className="text-white" />
              </div>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Tem dúvida? Precisa de ajuda? Nosso time está sempre disponível
              pra te dar aquela força
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 mt-12 bg-[#8B2323]/60 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Sobre a E<span className="text-black">quipe</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="https://i.postimg.cc/zfMsmXmZ/bruno.jpg"
                  alt="Bruno"
                  className="w-32 h-32 object-cover mx-auto rounded-2xl relative"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Bruno <span className="text-black">Daniel</span>
                </h3>
                <p className="text-white/80">Desenvolvedor(a)</p>
                <p className="text-white/80 mb-4">Fullstack</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/bruno-daniel-ferreira-leite/"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <LinkedinLogo size={28} weight="fill" />
                  </a>
                  <a
                    href="https://github.com/BrunoDaniel13"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <GithubLogo size={28} weight="fill" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="https://i.postimg.cc/C1nVdnCx/Vitoria.webp"
                  alt="Vitória"
                  className="w-32 h-32 object-cover mx-auto rounded-2xl relative"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Vitória <span className="text-black">Camilly</span>
                </h3>
                <p className="text-white/80">Desenvolvedor(a)</p>
                <p className="text-white/80 mb-4">Fullstack</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/vitoria-camilly/"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <LinkedinLogo size={28} weight="fill" />
                  </a>
                  <a
                    href="https://github.com/Vitoriacmlly"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <GithubLogo size={28} weight="fill" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="https://i.postimg.cc/9QP57jqy/Ft-Aleatoria.jpg"
                  alt="Giulio"
                  className="w-32 h-32 object-cover mx-auto rounded-2xl relative"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Giulio <span className="text-black">Gabriel</span>
                </h3>
                <p className="text-white/80">Desenvolvedor(a)</p>
                <p className="text-white/80 mb-4">Fullstack</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/giulio-arantes/"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <LinkedinLogo size={28} weight="fill" />
                  </a>
                  <a
                    href="https://github.com/giulioarantes"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <GithubLogo size={28} weight="fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="https://i.postimg.cc/sXM3SNzy/Iago.jpg"
                  alt="Iago"
                  className="w-32 h-32 object-cover mx-auto rounded-2xl relative"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Iago <span className="text-black">William</span>
                </h3>
                <p className="text-white/80">Desenvolvedor(a)</p>
                <p className="text-white/80 mb-4">Fullstack</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/iago-willian-/"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <LinkedinLogo size={28} weight="fill" />
                  </a>
                  <a
                    href="https://github.com/IagoWiliian"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <GithubLogo size={28} weight="fill" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="https://i.postimg.cc/jdHtzfpW/Yasmin.png"
                  alt="Yasmim"
                  className="w-32 h-32 object-cover mx-auto rounded-2xl relative"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Yasmim <span className="text-black">Ruecas</span>
                </h3>
                <p className="text-white/80">Desenvolvedor(a)</p>
                <p className="text-white/80 mb-4">Fullstack</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/yasmim-ruescas/"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <LinkedinLogo size={28} weight="fill" />
                  </a>
                  <a
                    href="https://github.com/Yasmimruescas"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <GithubLogo size={28} weight="fill" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#8B2323]/40 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-30"></div>
                <img
                  src="https://i.postimg.cc/c18sL2TB/Vini.jpg"
                  alt="Vinicius"
                  className="w-32 h-32 object-cover mx-auto rounded-2xl relative"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Vinicius <span className="text-black">Cristhian</span>
                </h3>
                <p className="text-white/80">Desenvolvedor(a)</p>
                <p className="text-white/80 mb-4">Fullstack</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/vinicristhian/"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <LinkedinLogo size={28} weight="fill" />
                  </a>
                  <a
                    href="https://github.com/ViniCristhian"
                    className="text-black hover:text-red-500 transition-colors"
                  >
                    <GithubLogo size={28} weight="fill" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
