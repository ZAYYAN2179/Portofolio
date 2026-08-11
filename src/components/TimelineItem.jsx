const TimelineItem = ({ item, index, isLast }) => {
  return (
    <div className={`relative pl-8 md:pl-10 fade-up fade-delay-${Math.min(index + 1, 4)}`}>
      {!isLast && (
        <span
          className="absolute left-[7px] md:left-[9px] top-3 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700/30"
          aria-hidden="true"
        />
      )}

      <span
        className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-blue-500 bg-gray-900 shadow-[0_0_12px_rgba(59,130,246,0.45)]"
        aria-hidden="true"
      />

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 md:p-6 hover:border-blue-500/50 transition-colors">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[10px] md:text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
            {item.role}
          </span>
          <span className="text-xs text-gray-500">{item.period}</span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.organization}</h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">{item.description}</p>

        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm md:text-base">
          {item.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
