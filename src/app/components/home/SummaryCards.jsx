const stats = [
  { label: "Total Friends", value: 10 },
  { label: "On Track", value: 3 },
  { label: "Need Attention", value: 6 },
  { label: "Interactions This Month", value: 12 },
];

const SummaryCards = () => {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-lg shadow-sm p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-[#244d3f]">{value}</h3>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummaryCards;