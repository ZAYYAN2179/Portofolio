const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">About Me</h2>

        <p className="text-gray-300 leading-relaxed text-justify">
          Saya adalah Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi Telkom University dengan minat kuat pada backend development, berpengalaman dalam pengembangan logika aplikasi, integrasi database, dan API. Berkomitmen untuk menerapkan
          keterampilan teknis dalam lingkungan profesional serta terus belajar dan berkembang.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400">Backend Development</h3>
            <p className="text-sm text-gray-400 mt-1">PHP, Laravel, API, CRUD Operations</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-400">Database & Tools</h3>
            <p className="text-sm text-gray-400 mt-1">MySQL, Firebase, Git, Visual Studio Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
