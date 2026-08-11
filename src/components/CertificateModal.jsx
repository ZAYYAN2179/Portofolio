import { useEffect } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-xl border border-gray-800 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition"
          aria-label="Tutup"
        >
          <FiX size={20} />
        </button>

        <div className="p-4 md:p-6">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full rounded-lg object-contain max-h-[60vh] bg-gray-950"
          />

          <div className="mt-5 space-y-2">
            <h3 id="certificate-modal-title" className="text-xl md:text-2xl font-bold text-white">
              {certificate.title}
            </h3>
            <p className="text-gray-400">{certificate.issuer}</p>
            <p className="text-sm text-gray-500">{certificate.date}</p>

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
              >
                Verifikasi
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
