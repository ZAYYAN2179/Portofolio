import { organizations } from "../data/organizations";
import TimelineItem from "../components/TimelineItem";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-500">Pengalaman Organisasi</h2>
        <p className="mt-3 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Pengalaman kepemimpinan dan kolaborasi dalam organisasi kemahasiswaan.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {organizations.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === organizations.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
