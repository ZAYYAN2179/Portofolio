const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold">
        Hi, I'm <span className="text-blue-500">Zayyan</span>
      </h1>

      <p className="mt-4 text-gray-400 max-w-xl">
        Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi Telkom University
      </p>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Lihat Project
        </button>

        <button className="px-6 py-2 border border-gray-600 rounded-lg hover:border-blue-500">
          Hubungi Saya
        </button>
      </div>
    </section>
  )
}

export default Hero