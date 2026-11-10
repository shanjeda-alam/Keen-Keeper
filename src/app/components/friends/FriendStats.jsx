const FriendStats = ({ friend }) => {
  const nextDue = new Date(friend.next_due_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const stats = [
    { value: friend.days_since_contact, label: "Days Since Contact" },
    { value: friend.goal, label: "Goal (Days)" },
    { value: nextDue, label: "Next Due" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="bg-white rounded-lg shadow-sm p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-[#244d3f]">{value}</h3>
          <p className="text-sm text-gray-500 mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendStats;