const CertificateCard = ({ certificate, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(certificate)}
      className="group text-left bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-sm font-medium text-white px-4 py-2 rounded-lg bg-blue-500/80">
            Lihat Sertifikat
          </span>
        </div>
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2 leading-snug mb-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-400">{certificate.issuer}</p>
        <p className="text-xs text-gray-500 mt-1">{certificate.date}</p>
      </div>
    </button>
  );
};

export default CertificateCard;
