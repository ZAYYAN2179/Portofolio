const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-gray-900">
      <h1 className="text-xl font-bold text-blue-500">
        Zayyan
      </h1>

      <ul className="flex gap-6 text-sm">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar