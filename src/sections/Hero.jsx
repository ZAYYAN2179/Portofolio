import profileImg from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center px-6 bg-gray-950"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">

        {/* Photo */}
        <div className="flex justify-center fade-up">
          <img
            src={profileImg}
            alt="Muh Zayyan Al Thaaf Nur"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold fade-up">
            Hi, I'm <span className="text-blue-500">Zayyan</span>
          </h1>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0 fade-up">
            Mahasiswa D3 Rekayasa Perangkat Lunak Aplikasi Telkom University
            dengan minat pada <span className="text-white">Backend Development</span>,
            berpengalaman dalam pengembangan logika aplikasi,
            integrasi database, dan API.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start fade-up">
            <a
              href="#projects"
              className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Lihat Project
            </a>

            <a
              href="#contact"
              className="px-6 py-2 border border-gray-600 rounded-lg hover:border-blue-500 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
