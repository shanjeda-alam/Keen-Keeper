"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// 1) Data fetch
const fetchFriends = async () => {
  const res = await fetch("/data/friends.json");
  const data = await res.json();
  return data;
};

const statusStyles = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-amber-400 text-white",
  "on-track": "bg-[#244d3f] text-white",
};

const FriendsGrid = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2) Data call
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFriends();
        setFriends(data);
      } catch (error) {
        console.error("Failed to load friends:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-[#244d3f]"></span>
      </div>
    );
  }

  // 3) Card dekhano
  return (
    <section className="mt-6 pb-12">
      <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <Link key={friend.id} href={`/friends/${friend.id}`}>
            <div className="card bg-base-100 shadow-sm hover:shadow-md transition h-full">
              <figure className="pt-6">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </figure>

              <div className="card-body items-center text-center gap-2 pt-3">
                <h2 className="card-title text-base">{friend.name}</h2>
                <p className="text-xs text-gray-400">
                  {friend.days_since_contact}d ago
                </p>

                <div className="flex flex-wrap justify-center gap-1">
                  {friend.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-sm border-none bg-green-100 text-green-700 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`badge badge-sm border-none capitalize ${
                    statusStyles[friend.status]
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FriendsGrid;