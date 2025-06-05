function Home() {
  return (
    <div  className="font-sans text-gray-800 min-h-screen bg-[url('https://ik.imagekit.io/uhimtlk7c/Design_sem_nome_18.png?updatedAt=1749047505922')] bg-cover bg-center">
      
      <main className="flex flex-col md:flex-row justify-between items-center p-10" >
        <section className="max-w-md">
          <h1 className="text-4xl font-bold">
            <span className="text-pink-600">Bem-vindo</span> ao mundo do iComida, procure o prato que quer.
          </h1>
          <p className="mt-4 text-lg">
            Encontre desde os pratos mais saborosos aos mais saudáveis, você que manda! Temos uma diversidade que irá
            surpreendê-lo.
          </p>
          <div className="mt-6 flex items-center">
            <input
              type="text"
              placeholder="Pesquisar pelo prato"
              className="p-3 border border-gray-300 rounded-lg flex-1"
            />
            <button className="ml-4 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              Pesquisar
            </button>
          </div>
        </section>
        <section className="mt-10 md:mt-0 md:max-w-md">
         
        </section>
      </main>
    
    </div>
  );
}

export default Home;