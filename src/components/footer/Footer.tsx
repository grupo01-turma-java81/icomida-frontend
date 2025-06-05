function Footer() {
  let ano = new Date().getFullYear();
  return (
    <footer className="flex justify-center bg-[#E83E28] border-red-300 p-6 text-center w-full bottom-0">
      <p className="text-black font-semibold">
        © {ano} iComida. Todos os direitos reservados.
      </p>
    </footer>
  )
}
export default Footer;