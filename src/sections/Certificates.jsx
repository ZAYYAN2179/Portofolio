import { useState } from "react";
import { certificates } from "../data/certificates";
import CertificateCard from "../components/CertificateCard";
import CertificateModal from "../components/CertificateModal";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificates" className="py-20 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-500">Sertifikat</h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Sertifikat dan pelatihan yang mendukung pengembangan skill teknis saya.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onClick={setSelectedCertificate}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Certificates;
