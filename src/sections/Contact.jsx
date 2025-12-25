import { FaGithub, FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gray-900" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-10">Contact Me</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/ZAYYAN2179" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.youtube.com/@MuhZayyanAlThaafNur" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
            <FaYoutube /> YouTube
          </a>

          <a href="https://instagram.com/muh.zayyann" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
            <FaInstagram /> Instagram
          </a>

          <a href="https://mail.google.com/mail/?view=cm&to=aatzayyan49@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
            <FaEnvelope /> Email
          </a>

          <a href="https://wa.me/6281247899439" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
            <FaWhatsapp /> WhatsApp
          </a>

          <a href="https://www.linkedin.com/in/muh-zayyan" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
