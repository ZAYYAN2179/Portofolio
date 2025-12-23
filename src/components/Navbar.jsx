const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-gray-900 fixed top-0 z-50">
      <h1 className="text-xl font-bold text-blue-500">
        Zayyan
      </h1>

      <ul className="flex gap-6 text-sm">
        <li>
          <a href="#home" className="hover:text-blue-400">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
