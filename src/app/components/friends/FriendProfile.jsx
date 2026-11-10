import Image from "next/image";

const statusStyles = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-amber-400 text-white",
  "on-track": "bg-[#244d3f] text-white",
};

const FriendProfile = ({ friend }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover mx-auto"
      />

      <h2 className="mt-3 text-lg font-semibold">{friend.name}</h2>

      <span
        className={`badge badge-sm border-none capitalize mt-2 ${
          statusStyles[friend.status]
        }`}
      >
        {friend.status}
      </span>

      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-sm border-none bg-green-100 text-green-700 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm italic text-gray-500">
        &quot;{friend.bio}&quot;
      </p>
      <p className="mt-1 text-xs text-gray-400">{friend.email}</p>
    </div>
  );
};

export default FriendProfile;