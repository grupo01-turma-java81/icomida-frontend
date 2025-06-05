import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="font-sans text-gray-800 min-h-screen bg-white flex flex-col justify-center items-start px-12"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/uhimtlk7c/Design_sem_nome_22.png?updatedAt=1749132863071')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="mt-24">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-[#de4c34]">Bem-vindo</span> ao mundo do<br />
          iComida, procure o prato que<br />
          quer.
        </h1>
        <p className="mt-8 text-lg">
          Encontre desde os pratos mais saborosos<br />
          aos mais saudáveis, você que manda! Temos<br />
          uma diversidade que irá surpreendê-lo
        </p>
        <div className="mt-8 flex items-center">
          <Link
            to="/menu"
            className="
               rounded-full px-6 py-2 text-2xl font-bold tracking-wide
               shadow transition-all duration-300 transform
             text-[#de4c34] bg-white border-2 border-[#de4c34]
               hover:scale-110 hover:bg-[#de4c34] hover:text-white
               hover:shadow-[0_0_20px_2px_rgba(222,76,52,0.4)]
               focus:outline-none focus:ring-2 focus:ring-[#de4c34]"
  
            style={{
              fontFamily: "inherit",
              letterSpacing: "0.02em",
            }}
          >
            MENU
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;